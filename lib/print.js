exports.weather = function(data) {

	jsonData = JSON.parse(data);

	weatherInfo = jsonData.weatherinfo;

	console.log('当天天气：\n');

	console.log('城市：' + weatherInfo.city.magenta);

	console.log('天气：' + weatherInfo.weather.magenta);

	console.log('最低温度：' + weatherInfo.temp1.magenta);

	console.log('最高温度：' + weatherInfo.temp2.magenta);

	console.log('发布时间：' + weatherInfo.ptime.magenta);

};



exports.liveWeather = function(data) {

	jsonData = JSON.parse(data);

	weatherInfo = jsonData.weatherinfo;

	console.log('\n实时天气：\n')

	console.log('温度：' + weatherInfo.temp.magenta);

	console.log('风：' + weatherInfo.WS.magenta + weatherInfo.WD.magenta);

	console.log('最新发布时间：' + weatherInfo.time.magenta);

	console.log('');

};