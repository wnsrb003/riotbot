### 실시간 상대 정글 id get 
- https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/8iIB1EYtkvcptxf5kfVYYytD6FzatrR6n9CdMD9INrunjA
- 정글 판별(spellId로 판별? - 11이 강타)
- id(summonerId), 이름(summonerName), 챔피언id(championId), 진영(team_id? 100/200) 

### 상대 정글 id로 accoutid get
- https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/꼬마규
- 매치리스트 검색을 위함

### 상대 정글 id로 정글 플레이목록 get -
- 불러올 게임 필터 목록(아래와 일치하는 게임만 호출)
1) 진영
2) 챔피언

## 불러온 게임 데이터 중 추출 항목
- 위치(포지션으로 탑/미드/바텀/상대정글)로 이동한 시간 
