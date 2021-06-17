const request = require('request-promise');

async function getId() {
  let name = encodeURI('꼬마규');
  let id, accoutId = '';
  let options = {
    'method': 'GET',
    'url': `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-8eb8277f-b567-44b0-ac92-7c5e7525e4f6`
  };

 await request(options, function (error, response) {
    if (error) throw new Error(error);
    id = JSON.parse(response.body).id;
    accountId = JSON.parse(response.body).accountId;
  });

  options = {
      'method': 'GET',
      'url': `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${encodeURI(accountId)}?champion=64&api_key=RGAPI-8eb8277f-b567-44b0-ac92-7c5e7525e4f6`
  };

  await request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

}

getId();
