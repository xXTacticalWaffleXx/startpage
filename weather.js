const weather = document.querySelector('#weather');

const getWeather = async () => {
	//get json data from the api
	const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=9eadbebea72109584f66e206ae0996b1');
	const json = await res.json();
	// get the temperature from the json and convert from kelvin to celcius
	var weatherText = Math.round(json.main.temp - 273.15);
	var weatherText = weatherText + "°C";
	
	weather.innerHTML = weatherText;
	}
