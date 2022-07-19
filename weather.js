const weather = document.querySelector('#weather');

function dingus() {
	weather.innerHTML = getWeather();
}

// document.body.onload = dingus;

const getWeather = async () => {
	const res = await fetch('https://pretty-basic-weather-app.herokuapp.com/api/weather/forecast?city=birmingham&country=GB');
	const json = await res.json();

	return json.temperature.temp;

	//optionally parse data from json to take out shit you don't need
	//update ui with weather data

	//return data if you want idk
}
