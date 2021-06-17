match_timeline_list = []
for game_id in tqdm(match_df['gameId']): # 각 게임 아이디마다 요청
    api_url = f'https://kr.api.riotgames.com/lol/match/v4/timelines/by-match/{game_id}?api_key={api_key}'
    r = requests.get(api_url)
    while r.status_code!=200: # 요청 제한 또는 오류로 인해 정상적으로 받아오지 않는 상태라면, 3초 간 시간을 지연
        time.sleep(3)
        r = requests.get(api_url)
    temp_match = pd.DataFrame(list(r.json().values())[0]) # 전체 데이터 저장 (데이터 값에 딕셔너리 형태로 필요한 정보가 저장)
    temp_timeline = pd.DataFrame()
    len_timeline = temp_match.shape[0]
    for i in range(len_timeline): # 각 게임의 타임라인이 모두 다르기 때문 (1분 가량마다 타임라인이 찍힌다)
        temp_current_timeline = pd.DataFrame(temp_match['participantFrames'].iloc[i]).T
        if i != (len_timeline-1):
            temp_position = pd.DataFrame(list(temp_current_timeline['position'].values), index=temp_current_timeline.index)
            temp_current_timeline = pd.concat([temp_current_timeline, temp_position], axis=1)
            temp_current_timeline.drop('position', axis=1, inplace=True)
        temp_current_timeline['timestamp'] = temp_match['timestamp'][i]
        temp_timeline = pd.concat([temp_timeline, temp_current_timeline], axis=0, sort=False)
    match_timeline_list.append(temp_timeline)

f = open('MatchTimelineData.pickle', 'wb') # 리스트 안의 데이터프레임 형태이므로 바이너리 코드로 저장하기 위함임
pickle.dump(match_timeline_list, f)
f.close()

# 블랙리스트 되서 또 11788개의 데이터만 받아왔음
match_df = match_df.iloc[:11788, :].copy()
f = open('MatchTimelineData.pickle', 'rb')
match_timeline_list = pickle.load(f)
