const request = require('request');

let requestFunc = request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  return JSON.parse(response.body);
});

module.exports = requestFunc;
