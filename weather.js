const weather = document.querySelector('#weather');

const getWeather = async () => {
	const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=9eadbebea72109584f66e206ae0996b1');
	const json = await res.json();
	console.log(json.main.temp);
	var weatherText = Math.round(json.main.temp - 273.15);
	var weatherText = + weatherText + "°C";
	weather.innerHTML = weatherText;
	}
