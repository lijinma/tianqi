var request = require('request');
var CODES = require('./lib/codes_for_cities.json');
var print = require('./lib/print');

module.exports = function(word) {

  //Today weather + live weather
  var todayWeatherUrl = 'http://www.weather.com.cn/data/cityinfo/';
  var liveWeatherUrl = 'http://www.weather.com.cn/data/sk/';

  request.get(todayWeatherUrl + CODES[word] + '.html', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      
      print.weather(body);

      request.get(liveWeatherUrl + CODES[word] + '.html', function (error, response, body) {
        if (!error && response.statusCode == 200) {

          print.liveWeather(body);
        }
      })

    }
  })




};
