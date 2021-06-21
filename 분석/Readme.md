상대 정글의 매치id(정글로 플레이한 정보만)를 통해 동선 예측

아래 매치id로 검색 결과에서 Lv1~6까지의 position 값을 통해 상대 정글 예측 하여 와드 설치 및 갱 예방

- 맵 정보 (x:13982, y:14446) 
[맵](./맵.png)
- 정글 role(jungleMinionsKilled 값으로 탐색)
- timestamp 계산 필요
- 정글 갱킹으로 인한 킬 판단 필요(킬 or 어시스트 판단할 데이터)

<details>
  <summary>접기/펼치기</summary>
  <div>
{
    "frames": [
        {
            "participantFrames": {
                "1": {
                    "participantId": 1,
                    "position": {
                        "x": 7012,
                        "y": 7415
                    },
                    "currentGold": 121,
                    "totalGold": 621,
                    "level": 1,
                    "xp": 225,
                    "minionsKilled": 3,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "2": {
                    "participantId": 2,
                    "position": {
                        "x": 11686,
                        "y": 1541
                    },
                    "currentGold": 97,
                    "totalGold": 547,
                    "level": 1,
                    "xp": 120,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "3": {
                    "participantId": 3,
                    "position": {
                        "x": 1958,
                        "y": 11805
                    },
                    "currentGold": 20,
                    "totalGold": 520,
                    "level": 1,
                    "xp": 0,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "4": {
                    "participantId": 4,
                    "position": {
                        "x": 7254,
                        "y": 7628
                    },
                    "currentGold": 140,
                    "totalGold": 940,
                    "level": 2,
                    "xp": 364,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 4,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "5": {
                    "participantId": 5,
                    "position": {
                        "x": 11627,
                        "y": 1780
                    },
                    "currentGold": 87,
                    "totalGold": 587,
                    "level": 1,
                    "xp": 120,
                    "minionsKilled": 2,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "6": {
                    "participantId": 6,
                    "position": {
                        "x": 7532,
                        "y": 7806
                    },
                    "currentGold": 436,
                    "totalGold": 936,
                    "level": 2,
                    "xp": 298,
                    "minionsKilled": 5,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "7": {
                    "participantId": 7,
                    "position": {
                        "x": 2228,
                        "y": 12625
                    },
                    "currentGold": 494,
                    "totalGold": 994,
                    "level": 1,
                    "xp": 238,
                    "minionsKilled": 3,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "8": {
                    "participantId": 8,
                    "position": {
                        "x": 12855,
                        "y": 1860
                    },
                    "currentGold": 572,
                    "totalGold": 1072,
                    "level": 1,
                    "xp": 159,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "9": {
                    "participantId": 9,
                    "position": {
                        "x": 12619,
                        "y": 2653
                    },
                    "currentGold": 183,
                    "totalGold": 683,
                    "level": 1,
                    "xp": 159,
                    "minionsKilled": 5,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "10": {
                    "participantId": 10,
                    "position": {
                        "x": 12405,
                        "y": 6483
                    },
                    "currentGold": 173,
                    "totalGold": 673,
                    "level": 2,
                    "xp": 340,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 4,
                    "dominionScore": 0,
                    "teamScore": 0
                }
            },
            "events": [
                {
                    "type": "CHAMPION_KILL",
                    "timestamp": 63175,
                    "position": {
                        "x": 5916,
                        "y": 5199
                    },
                    "killerId": 6,
                    "victimId": 4,
                    "assistingParticipantIds": [
                        7,
                        8,
                        9
                    ]
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 66940,
                    "participantId": 4,
                    "itemId": 1001
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 70447,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 8
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 91793,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 4
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 103920,
                    "participantId": 10,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 105373,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 5
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 107191,
                    "participantId": 4,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 108776,
                    "participantId": 6,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                }
            ],
            "timestamp": 120012
        },
        {
            "participantFrames": {
                "1": {
                    "participantId": 1,
                    "position": {
                        "x": 6279,
                        "y": 6273
                    },
                    "currentGold": 433,
                    "totalGold": 943,
                    "level": 3,
                    "xp": 829,
                    "minionsKilled": 12,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "2": {
                    "participantId": 2,
                    "position": {
                        "x": 10628,
                        "y": 1176
                    },
                    "currentGold": 273,
                    "totalGold": 723,
                    "level": 2,
                    "xp": 457,
                    "minionsKilled": 2,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "3": {
                    "participantId": 3,
                    "position": {
                        "x": 1234,
                        "y": 11700
                    },
                    "currentGold": 296,
                    "totalGold": 796,
                    "level": 2,
                    "xp": 601,
                    "minionsKilled": 9,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "4": {
                    "participantId": 4,
                    "position": {
                        "x": 2941,
                        "y": 7763
                    },
                    "currentGold": 452,
                    "totalGold": 1252,
                    "level": 3,
                    "xp": 729,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 12,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "5": {
                    "participantId": 5,
                    "position": {
                        "x": 10503,
                        "y": 1221
                    },
                    "currentGold": 321,
                    "totalGold": 821,
                    "level": 2,
                    "xp": 457,
                    "minionsKilled": 8,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "6": {
                    "participantId": 6,
                    "position": {
                        "x": 6673,
                        "y": 7237
                    },
                    "currentGold": 685,
                    "totalGold": 1195,
                    "level": 3,
                    "xp": 826,
                    "minionsKilled": 11,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "7": {
                    "participantId": 7,
                    "position": {
                        "x": 2096,
                        "y": 12177
                    },
                    "currentGold": 782,
                    "totalGold": 1282,
                    "level": 3,
                    "xp": 843,
                    "minionsKilled": 10,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "8": {
                    "participantId": 8,
                    "position": {
                        "x": 11604,
                        "y": 1131
                    },
                    "currentGold": 806,
                    "totalGold": 1306,
                    "level": 2,
                    "xp": 478,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "9": {
                    "participantId": 9,
                    "position": {
                        "x": 11662,
                        "y": 1913
                    },
                    "currentGold": 467,
                    "totalGold": 967,
                    "level": 2,
                    "xp": 478,
                    "minionsKilled": 14,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "10": {
                    "participantId": 10,
                    "position": {
                        "x": 6906,
                        "y": 6786
                    },
                    "currentGold": 481,
                    "totalGold": 981,
                    "level": 3,
                    "xp": 767,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 12,
                    "dominionScore": 0,
                    "teamScore": 0
                }
            },
            "events": [
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 121697,
                    "participantId": 6,
                    "itemId": 2010
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 126024,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 6
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 129298,
                    "participantId": 7,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 131642,
                    "participantId": 1,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 135344,
                    "participantId": 6,
                    "itemId": 2003
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 139574,
                    "participantId": 9,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 140565,
                    "participantId": 8,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 151706,
                    "participantId": 3,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 152864,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 7
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 156134,
                    "participantId": 10,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 158315,
                    "participantId": 2,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 159604,
                    "participantId": 5,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 161885,
                    "participantId": 6,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 166708,
                    "participantId": 1,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 169452,
                    "participantId": 7,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 171996,
                    "participantId": 8,
                    "itemId": 2003
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 178208,
                    "participantId": 4,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 178307,
                    "participantId": 1,
                    "itemId": 2010
                }
            ],
            "timestamp": 180025
        },
        {
            "participantFrames": {
                "1": {
                    "participantId": 1,
                    "position": {
                        "x": 6779,
                        "y": 6859
                    },
                    "currentGold": 131,
                    "totalGold": 1291,
                    "level": 3,
                    "xp": 1130,
                    "minionsKilled": 16,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "2": {
                    "participantId": 2,
                    "position": {
                        "x": 10668,
                        "y": 1087
                    },
                    "currentGold": 511,
                    "totalGold": 961,
                    "level": 3,
                    "xp": 796,
                    "minionsKilled": 5,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "3": {
                    "participantId": 3,
                    "position": {
                        "x": 1279,
                        "y": 11385
                    },
                    "currentGold": 599,
                    "totalGold": 1099,
                    "level": 4,
                    "xp": 1235,
                    "minionsKilled": 17,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "4": {
                    "participantId": 4,
                    "position": {
                        "x": 6974,
                        "y": 5151
                    },
                    "currentGold": 1123,
                    "totalGold": 1923,
                    "level": 3,
                    "xp": 977,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 16,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "5": {
                    "participantId": 5,
                    "position": {
                        "x": 10167,
                        "y": 1532
                    },
                    "currentGold": 603,
                    "totalGold": 1103,
                    "level": 3,
                    "xp": 796,
                    "minionsKilled": 15,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "6": {
                    "participantId": 6,
                    "position": {
                        "x": 8791,
                        "y": 8799
                    },
                    "currentGold": 47,
                    "totalGold": 1682,
                    "level": 3,
                    "xp": 1139,
                    "minionsKilled": 15,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "7": {
                    "participantId": 7,
                    "position": {
                        "x": 2741,
                        "y": 12489
                    },
                    "currentGold": 1003,
                    "totalGold": 1503,
                    "level": 4,
                    "xp": 1414,
                    "minionsKilled": 16,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "8": {
                    "participantId": 8,
                    "position": {
                        "x": 11488,
                        "y": 1761
                    },
                    "currentGold": 942,
                    "totalGold": 1442,
                    "level": 3,
                    "xp": 797,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "9": {
                    "participantId": 9,
                    "position": {
                        "x": 11547,
                        "y": 1438
                    },
                    "currentGold": 839,
                    "totalGold": 1339,
                    "level": 3,
                    "xp": 979,
                    "minionsKilled": 26,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "10": {
                    "participantId": 10,
                    "position": {
                        "x": 7594,
                        "y": 10970
                    },
                    "currentGold": 689,
                    "totalGold": 1189,
                    "level": 3,
                    "xp": 949,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 16,
                    "dominionScore": 0,
                    "teamScore": 0
                }
            },
            "events": [
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 193253,
                    "participantId": 5,
                    "itemId": 2003
                },
                {
                    "type": "CHAMPION_KILL",
                    "timestamp": 195964,
                    "position": {
                        "x": 7380,
                        "y": 7368
                    },
                    "killerId": 6,
                    "victimId": 1,
                    "assistingParticipantIds": []
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 198809,
                    "participantId": 3,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 201353,
                    "participantId": 8,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 202278,
                    "participantId": 7,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 204822,
                    "participantId": 9,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "CHAMPION_KILL",
                    "timestamp": 207799,
                    "position": {
                        "x": 9419,
                        "y": 7250
                    },
                    "killerId": 4,
                    "victimId": 6,
                    "assistingParticipantIds": [
                        1
                    ]
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 208692,
                    "participantId": 1,
                    "itemId": 1036
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 211599,
                    "participantId": 1,
                    "itemId": 1001
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 215036,
                    "participantId": 6,
                    "itemId": 1036
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 215532,
                    "participantId": 6,
                    "itemId": 1036
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 215763,
                    "participantId": 6,
                    "itemId": 1042
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 218505,
                    "participantId": 6,
                    "itemId": 2003
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 218901,
                    "participantId": 6,
                    "itemId": 2055
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 221677,
                    "participantId": 2,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 222867,
                    "participantId": 5,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 223495,
                    "participantId": 7,
                    "itemId": 2003
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 232318,
                    "participantId": 3,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                }
            ],
            "timestamp": 240053
        },
        {
            "participantFrames": {
                "1": {
                    "participantId": 1,
                    "position": {
                        "x": 6735,
                        "y": 7316
                    },
                    "currentGold": 433,
                    "totalGold": 1603,
                    "level": 5,
                    "xp": 1765,
                    "minionsKilled": 24,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "2": {
                    "participantId": 2,
                    "position": {
                        "x": 11406,
                        "y": 1594
                    },
                    "currentGold": 1029,
                    "totalGold": 1479,
                    "level": 4,
                    "xp": 1177,
                    "minionsKilled": 7,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "3": {
                    "participantId": 3,
                    "position": {
                        "x": 1467,
                        "y": 11583
                    },
                    "currentGold": 847,
                    "totalGold": 1347,
                    "level": 5,
                    "xp": 1809,
                    "minionsKilled": 22,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "4": {
                    "participantId": 4,
                    "position": {
                        "x": 12522,
                        "y": 1504
                    },
                    "currentGold": 1619,
                    "totalGold": 2419,
                    "level": 4,
                    "xp": 1508,
                    "minionsKilled": 1,
                    "jungleMinionsKilled": 24,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "5": {
                    "participantId": 5,
                    "position": {
                        "x": 11406,
                        "y": 1434
                    },
                    "currentGold": 877,
                    "totalGold": 1377,
                    "level": 4,
                    "xp": 1177,
                    "minionsKilled": 20,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "6": {
                    "participantId": 6,
                    "position": {
                        "x": 7786,
                        "y": 7656
                    },
                    "currentGold": 292,
                    "totalGold": 1937,
                    "level": 4,
                    "xp": 1473,
                    "minionsKilled": 20,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "7": {
                    "participantId": 7,
                    "position": {
                        "x": 1961,
                        "y": 12651
                    },
                    "currentGold": 320,
                    "totalGold": 1845,
                    "level": 5,
                    "xp": 1817,
                    "minionsKilled": 26,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "8": {
                    "participantId": 8,
                    "position": {
                        "x": 12788,
                        "y": 1470
                    },
                    "currentGold": 1136,
                    "totalGold": 1636,
                    "level": 4,
                    "xp": 1141,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "9": {
                    "participantId": 9,
                    "position": {
                        "x": 12587,
                        "y": 2714
                    },
                    "currentGold": 1164,
                    "totalGold": 1664,
                    "level": 4,
                    "xp": 1322,
                    "minionsKilled": 35,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "10": {
                    "participantId": 10,
                    "position": {
                        "x": 2871,
                        "y": 11234
                    },
                    "currentGold": 998,
                    "totalGold": 1498,
                    "level": 4,
                    "xp": 1649,
                    "minionsKilled": 1,
                    "jungleMinionsKilled": 24,
                    "dominionScore": 0,
                    "teamScore": 0
                }
            },
            "events": [
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 245733,
                    "participantId": 1,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 248743,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 3
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 250956,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 10
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 251650,
                    "wardType": "CONTROL_WARD",
                    "creatorId": 6
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 251650,
                    "participantId": 6,
                    "itemId": 2055
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 252509,
                    "participantId": 7,
                    "itemId": 1001
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 252906,
                    "participantId": 7,
                    "itemId": 1042
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 254491,
                    "participantId": 7,
                    "itemId": 1036
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 257960,
                    "participantId": 7,
                    "itemId": 2055
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 262885,
                    "participantId": 4,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 263645,
                    "participantId": 3,
                    "itemId": 2003
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 264968,
                    "participantId": 6,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 269099,
                    "participantId": 10,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 269594,
                    "participantId": 6,
                    "itemId": 2010
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 270620,
                    "participantId": 9,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 274023,
                    "participantId": 3,
                    "itemId": 2010
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 276764,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 1
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 283438,
                    "participantId": 6,
                    "itemId": 2003
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 286517,
                    "participantId": 8,
                    "skillSlot": 3,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 287970,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 4
                },
                {
                    "type": "CHAMPION_KILL",
                    "timestamp": 288663,
                    "position": {
                        "x": 12788,
                        "y": 1470
                    },
                    "killerId": 2,
                    "victimId": 8,
                    "assistingParticipantIds": [
                        4,
                        5
                    ]
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 289951,
                    "participantId": 3,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 290380,
                    "wardType": "CONTROL_WARD",
                    "creatorId": 7
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 290380,
                    "participantId": 7,
                    "itemId": 2055
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 290646,
                    "participantId": 9,
                    "itemId": 2003
                },
                {
                    "type": "WARD_KILL",
                    "timestamp": 296464,
                    "wardType": "YELLOW_TRINKET",
                    "killerId": 10
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 297126,
                    "participantId": 7,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 299009,
                    "participantId": 1,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 299835,
                    "participantId": 2,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                }
            ],
            "timestamp": 300066
        },
        {
            "participantFrames": {
                "1": {
                    "participantId": 1,
                    "position": {
                        "x": 6927,
                        "y": 7147
                    },
                    "currentGold": 625,
                    "totalGold": 1795,
                    "level": 5,
                    "xp": 2035,
                    "minionsKilled": 28,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "2": {
                    "participantId": 2,
                    "position": {
                        "x": 11933,
                        "y": 1737
                    },
                    "currentGold": 1185,
                    "totalGold": 1635,
                    "level": 4,
                    "xp": 1636,
                    "minionsKilled": 8,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "3": {
                    "participantId": 3,
                    "position": {
                        "x": 2533,
                        "y": 12777
                    },
                    "currentGold": 1168,
                    "totalGold": 1668,
                    "level": 6,
                    "xp": 2448,
                    "minionsKilled": 32,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "4": {
                    "participantId": 4,
                    "position": {
                        "x": 2351,
                        "y": 8434
                    },
                    "currentGold": 322,
                    "totalGold": 2647,
                    "level": 5,
                    "xp": 1779,
                    "minionsKilled": 2,
                    "jungleMinionsKilled": 28,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "5": {
                    "participantId": 5,
                    "position": {
                        "x": 11263,
                        "y": 1737
                    },
                    "currentGold": 1147,
                    "totalGold": 1647,
                    "level": 4,
                    "xp": 1575,
                    "minionsKilled": 28,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "6": {
                    "participantId": 6,
                    "position": {
                        "x": 7176,
                        "y": 7264
                    },
                    "currentGold": 702,
                    "totalGold": 2357,
                    "level": 5,
                    "xp": 2287,
                    "minionsKilled": 35,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "7": {
                    "participantId": 7,
                    "position": {
                        "x": 2980,
                        "y": 13178
                    },
                    "currentGold": 656,
                    "totalGold": 2181,
                    "level": 6,
                    "xp": 2422,
                    "minionsKilled": 35,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "8": {
                    "participantId": 8,
                    "position": {
                        "x": 12887,
                        "y": 1855
                    },
                    "currentGold": 166,
                    "totalGold": 1791,
                    "level": 4,
                    "xp": 1254,
                    "minionsKilled": 0,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "9": {
                    "participantId": 9,
                    "position": {
                        "x": 12329,
                        "y": 2503
                    },
                    "currentGold": 1413,
                    "totalGold": 1913,
                    "level": 4,
                    "xp": 1646,
                    "minionsKilled": 41,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "10": {
                    "participantId": 10,
                    "position": {
                        "x": 11816,
                        "y": 2642
                    },
                    "currentGold": 211,
                    "totalGold": 1711,
                    "level": 5,
                    "xp": 1854,
                    "minionsKilled": 1,
                    "jungleMinionsKilled": 28,
                    "dominionScore": 0,
                    "teamScore": 0
                }
            },
            "events": [
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 301657,
                    "participantId": 8,
                    "itemId": 3145
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 302121,
                    "participantId": 5,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 303013,
                    "participantId": 8,
                    "itemId": 2055
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 305656,
                    "participantId": 10,
                    "itemId": 3117
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 307835,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 9
                },
                {
                    "type": "WARD_KILL",
                    "timestamp": 310411,
                    "wardType": "YELLOW_TRINKET",
                    "killerId": 4
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 313946,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 9
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 314707,
                    "participantId": 6,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 321155,
                    "participantId": 4,
                    "itemId": 3134
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 321915,
                    "participantId": 4,
                    "itemId": 1036
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 322972,
                    "participantId": 4,
                    "itemId": 2055
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 323368,
                    "participantId": 4,
                    "itemId": 3364
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 323368,
                    "participantId": 4,
                    "itemId": 3340
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 332817,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 6
                },
                {
                    "type": "WARD_KILL",
                    "timestamp": 336255,
                    "wardType": "CONTROL_WARD",
                    "killerId": 3
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 336552,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 3
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 337014,
                    "wardType": "CONTROL_WARD",
                    "creatorId": 8
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 337014,
                    "participantId": 8,
                    "itemId": 2055
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 348912,
                    "participantId": 4,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 354531,
                    "participantId": 3,
                    "skillSlot": 4,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 356448,
                    "participantId": 10,
                    "skillSlot": 2,
                    "levelUpType": "NORMAL"
                }
            ],
            "timestamp": 360083
        },
        {
            "participantFrames": {
                "1": {
                    "participantId": 1,
                    "position": {
                        "x": 2251,
                        "y": 9856
                    },
                    "currentGold": 339,
                    "totalGold": 2319,
                    "level": 6,
                    "xp": 2737,
                    "minionsKilled": 31,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "2": {
                    "participantId": 2,
                    "position": {
                        "x": 5026,
                        "y": 978
                    },
                    "currentGold": 219,
                    "totalGold": 1769,
                    "level": 4,
                    "xp": 1636,
                    "minionsKilled": 8,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "3": {
                    "participantId": 3,
                    "position": {
                        "x": 2489,
                        "y": 9878
                    },
                    "currentGold": 1496,
                    "totalGold": 1996,
                    "level": 6,
                    "xp": 3018,
                    "minionsKilled": 41,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "4": {
                    "participantId": 4,
                    "position": {
                        "x": 11139,
                        "y": 6262
                    },
                    "currentGold": 667,
                    "totalGold": 2992,
                    "level": 6,
                    "xp": 2474,
                    "minionsKilled": 10,
                    "jungleMinionsKilled": 32,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "5": {
                    "participantId": 5,
                    "position": {
                        "x": 6254,
                        "y": 911
                    },
                    "currentGold": -181,
                    "totalGold": 1769,
                    "level": 4,
                    "xp": 1575,
                    "minionsKilled": 28,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "6": {
                    "participantId": 6,
                    "position": {
                        "x": 7618,
                        "y": 7764
                    },
                    "currentGold": 96,
                    "totalGold": 2926,
                    "level": 6,
                    "xp": 3098,
                    "minionsKilled": 43,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "7": {
                    "participantId": 7,
                    "position": {
                        "x": 4591,
                        "y": 9860
                    },
                    "currentGold": 925,
                    "totalGold": 2450,
                    "level": 6,
                    "xp": 2933,
                    "minionsKilled": 43,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "8": {
                    "participantId": 8,
                    "position": {
                        "x": 13636,
                        "y": 3686
                    },
                    "currentGold": 403,
                    "totalGold": 2028,
                    "level": 4,
                    "xp": 1658,
                    "minionsKilled": 3,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "9": {
                    "participantId": 9,
                    "position": {
                        "x": 14335,
                        "y": 14190
                    },
                    "currentGold": 277,
                    "totalGold": 2227,
                    "level": 5,
                    "xp": 1990,
                    "minionsKilled": 50,
                    "jungleMinionsKilled": 0,
                    "dominionScore": 0,
                    "teamScore": 0
                },
                "10": {
                    "participantId": 10,
                    "position": {
                        "x": 4699,
                        "y": 9120
                    },
                    "currentGold": 336,
                    "totalGold": 1836,
                    "level": 5,
                    "xp": 1903,
                    "minionsKilled": 2,
                    "jungleMinionsKilled": 28,
                    "dominionScore": 0,
                    "teamScore": 0
                }
            },
            "events": [
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 361043,
                    "participantId": 6,
                    "itemId": 2010
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 361373,
                    "participantId": 3,
                    "itemId": 2010
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 365637,
                    "participantId": 7,
                    "skillSlot": 4,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 367618,
                    "participantId": 6,
                    "skillSlot": 4,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 371021,
                    "participantId": 1,
                    "itemId": 2010
                },
                {
                    "type": "CHAMPION_KILL",
                    "timestamp": 375712,
                    "position": {
                        "x": 5512,
                        "y": 5956
                    },
                    "killerId": 6,
                    "victimId": 1,
                    "assistingParticipantIds": []
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 375778,
                    "participantId": 8,
                    "itemId": 2003
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 378688,
                    "participantId": 9,
                    "skillSlot": 1,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "CHAMPION_KILL",
                    "timestamp": 383682,
                    "position": {
                        "x": 4332,
                        "y": 5144
                    },
                    "killerId": 1,
                    "victimId": 6,
                    "assistingParticipantIds": []
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 387947,
                    "participantId": 1,
                    "skillSlot": 4,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 388046,
                    "participantId": 6,
                    "itemId": 6670
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 388046,
                    "participantId": 6,
                    "itemId": 1036
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 388046,
                    "participantId": 6,
                    "itemId": 1042
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 388046,
                    "participantId": 6,
                    "itemId": 1036
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 391119,
                    "participantId": 1,
                    "itemId": 3047
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 391119,
                    "participantId": 1,
                    "itemId": 1001
                },
                {
                    "type": "SKILL_LEVEL_UP",
                    "timestamp": 399349,
                    "participantId": 4,
                    "skillSlot": 4,
                    "levelUpType": "NORMAL"
                },
                {
                    "type": "WARD_PLACED",
                    "timestamp": 400043,
                    "wardType": "YELLOW_TRINKET",
                    "creatorId": 8
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 400704,
                    "participantId": 5,
                    "itemId": 1001
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 402188,
                    "participantId": 5,
                    "itemId": 3006
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 402188,
                    "participantId": 5,
                    "itemId": 1001
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 404171,
                    "participantId": 5,
                    "itemId": 1042
                },
                {
                    "type": "ITEM_DESTROYED",
                    "timestamp": 406715,
                    "participantId": 3,
                    "itemId": 2010
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 407607,
                    "participantId": 6,
                    "itemId": 1037
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 407607,
                    "participantId": 2,
                    "itemId": 3020
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 415804,
                    "participantId": 9,
                    "itemId": 3070
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 417390,
                    "participantId": 9,
                    "itemId": 3057
                },
                {
                    "type": "ITEM_PURCHASED",
                    "timestamp": 419142,
                    "participantId": 9,
                    "itemId": 1036
                }
            ],
            "timestamp": 420101
        },
   }
  </div>
</details>
