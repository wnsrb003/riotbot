const request = require('request-promise');
//ㅁㄴㅇㅁㄴㅇ
async function getId() {
  let name = '꼬마규';
  let encodeName = encodeURI(name);
  let teamId = 100;
  let api_key = 'RGAPI-8e0cdc74-a04d-45a3-b136-25f66360ee0b';
  let id, accoutId = '';
  let options = {
    'method': 'GET',
    'url': `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeName}?api_key=${api_key}`
  };

 await request(options, function (error, response) {
    if (error) throw new Error(error);
    id = JSON.parse(response.body).id;
    accountId = JSON.parse(response.body).accountId;
  });

  options = {
      'method': 'GET',
      'url': `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${encodeURI(accountId)}?champion=64&api_key=${api_key}`
  };

  let gameId = [];
  await request(options, function (error, response) {
    if (error) throw new Error(error);
    //console.log(response.body);
    for (let match of JSON.parse(response.body).matches){
      gameId.push(match.gameId);
    }
  });
  let temp_gameId = gameId;
  temp_gameId.length = 60;
  console.log(temp_gameId);

  let participantId = [];
  let deleteidx = [];

  for (let gid of gameId){
    options = {
      'method': 'GET',
      'url': `https://kr.api.riotgames.com/lol/match/v4/matches/${gid}?api_key=${api_key}`
    };

    await request(options, function (error, response) {
        let partId;
        let pants = JSON.parse(response.body).participantIdentities;
        for (let pant of pants){
          if (pant.player.summonerName === name){
            partId = pant.participantId;
          }
        }

        if (parseInt(partId) > 5){
          if (parseInt(teamId) === 200){
            participantId.push(partId);
          }
          else {
            for(let i=0; i<temp_gameId.length; i++){
              if(parseInt(temp_gameId[i]) === parseInt(gid)){
                // temp_gameId.splice(i, 1);
                deleteidx.push(gid);
                break;
              }
            }
          }
        }
        else if(parseInt(partId) < 6){
          if (parseInt(teamId) === 100){
            participantId.push(partId);
          }
          else{
            for(let i=0; i<temp_gameId.length; i++){
              if(parseInt(temp_gameId[i]) === parseInt(gid)){
                // temp_gameId.splice(i, 1);
                deleteidx.push(gid);
                break;
              }
            }
          }
        }
    });
  }
  for(let i = 0; i < temp_gameId.length; i++) {
    for(let d = 0; d < deleteidx.length; d++){
      if(temp_gameId[i] === deleteidx[d])  {
        temp_gameId.splice(i, 1);
        i--;
        break;
      }
    }
  }
  console.log(`gameId: ${temp_gameId}, length: ${temp_gameId.length}, participantId: ${participantId}, length: ${participantId.length}`);

  let positions = [];
  let positions_lane = [];
  // for (let gid of temp_gameId){
  for (let g=0; g<temp_gameId.length; g++){
  // let gid = '5243203221'
  // let participantId = 3;
    options = {
      'method': 'GET',
      'url': `https://kr.api.riotgames.com/lol/match/v4/timelines/by-match/${temp_gameId[g]}?api_key=${api_key}`
    };

    await request(options, function (error, response) {
      let frames = JSON.parse(response.body).frames;
      // let id;
      // for (let i=0; i<Object.values(frames[0].participantFrames).length; i++){
      //   if(parseInt(Object.values(frames[0].participantFrames)[i].participantId) === participantId) {
      //     id = Object.keys(frames[0].participantFrames)[i];
      //   }
      // }

      for (let f=0; f<frames.length; f++){
        //if (parseInt(frames[f].timestamp) > 90000 && parseInt(frames[f].timestamp) <= 400000){
          if (parseInt(frames[f].timestamp) >= 0 && parseInt(frames[f].timestamp) <= 400000){
            for (let i=0; i<Object.values(frames[f].participantFrames).length; i++){
              if(parseInt(Object.values(frames[f].participantFrames)[i].participantId) === participantId[g]) {
                positions.push(Object.values(frames[f].participantFrames)[i].position);
                console.log(Object.values(frames[f].participantFrames)[i].position, ' -> ')
                let posi = Object.values(frames[f].participantFrames)[i].position;
                let p;
                if ((parseInt(posi.x) <= 2000 && parseInt(posi.y) <= 2000) || (parseInt(posi.x) >= 11982 && parseInt(posi.y) >= 13000) ){
                  p = 'home';
                  positions_lane.push('home');
                }
                else if (parseInt(posi.y) > 7223){
                  p = 'top/mid';
                  positions_lane.push('top/mid');
                }
                else if (parseInt(posi.y) < 7223){
                  p = 'bot/mid'
                  positions_lane.push('bot/mid');
                }
                console.log(`${p}`);
              }
            }
        }
        else if(parseInt(frames[f].timestamp) > 240000) {
          break;
        }
      }
    });
    console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
  }
        console.log(`${positions}, length:${positions.length}`);
        console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
        console.log(`${positions_lane}`);
}

getId();
