### 실시간 상대 정글 id get 
- https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/8iIB1EYtkvcptxf5kfVYYytD6FzatrR6n9CdMD9INrunjA
- 정글 판별(spellId로 판별? - 11이 강타)
- id(summonerId), 이름(summonerName), 챔피언id(championId), 진영(team_id - 100 for blue side. 200 for red side.) 

### 상대 정글 id로 accoutid get
- https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/꼬마규
- 매치리스트 검색을 위함

### 상대 정글 id로 정글 플레이목록에서 gameId get - https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/1eztq32rpjDLF6Xdq5fYHSnxiOq2vs9WDBKota6ZWcY?champion=113
- 불러올 게임 필터 목록(아래와 일치하는 게임만 호출)
1) 진영 - api지원안함(매치 정보 추출한 뒤, 필터링 필요)
2) 챔피언 - 필터 가능
3) lane - JUNGLE - 데이터에서 추출
```
{
            "platformId": "KR",
            "gameId": 5243203221,
            "champion": 113,
            "queue": 420,
            "season": 13,
            "timestamp": 1623229072070,
            "role": "NONE",
            "lane": "JUNGLE"
        }
```

- 매치리스트의 gameId = matchId 리스트 저장

### matchId로 해당 게임의 찾고자 하는 정글 participantId, 진영(team_id)추출 - https://kr.api.riotgames.com/lol/match/v4/matches/5243203221
```
"participantIdentities": [
        {
            "participantId": 3,
            "player": {
                "platformId": "KR",
                "accountId": "1eztq32rpjDLF6Xdq5fYHSnxiOq2vs9WDBKota6ZWcY",
                "summonerName": "꼬마규",
                "summonerId": "Tfd6isvl2uJCqOzWu5XcI_RN5YnT05LkmDMy-ADsgzH-CA",
                "currentPlatformId": "KR",
                "currentAccountId": "1eztq32rpjDLF6Xdq5fYHSnxiOq2vs9WDBKota6ZWcY",
                "matchHistoryUri": "/v1/stats/player_history/KR/842031",
                "profileIcon": 4490
            }
        }]
```
- 진영이 다르면 우선 넘김(추후 확인)

### matchId로 동선 예측을 위한 position 값 추출 - https://kr.api.riotgames.com/lol/match/v4/timelines/by-match/5243203221
```
 "frames": [
        {
            "participantFrames": {
            "2": {
                    "participantId": 3,
                    "position": {
                        "x": 3454,
                        "y": 8253
                    },
                    "currentGold": 120,
                    "totalGold": 620,
                    "level": 2,
                    "xp": 320,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 4,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "events": [],
            "timestamp": 120018
            },
            "participantFrames": {
             "2": {
                    "participantId": 3,
                    "position": {
                        "x": 8705,
                        "y": 2342
                    },
                    "currentGold": 858,
                    "totalGold": 1358,
                    "level": 4,
                    "xp": 1278,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 26,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "events": [{
                    "type": "ITEM_PURCHASED",
                    "timestamp": 254132,
                    "participantId": 3,
                    "itemId": 1028
                },],
            "timestamp": 240026
            },
```
- 데이터 수집 유효 timestamp 체크 -> 인베제외/ 버프 젠  1:30 ~ 바위게 젠 3:15(무지성 풀캠 말도 안되게 빨리 돌면 다 먹는 시점) ~ 4:00(집도착 아이템구매 후 갱시도)
- 정형화된? 정글링은 초반에만 이루어지기 때문에 보통 첫갱/두번째갱 까지만 예측가능할 듯하여 timestamp는 그 시점까지만 분석(90000~240000)

## 불러온 게임 데이터 중 추출 항목
- 위치(포지션으로 탑/미드/바텀/상대정글)로 이동한 시간 
