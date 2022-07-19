const weather = document.querySelector('#weather');

function dingus() {
	weather.innerHTML = "dighjn";
}

// document.body.onload = dingus;

const getWeather = async () => {
	const res = await fetch('url to weather');
	const json = await res.json();

	//optionally parse data from json to take out shit you don't need
	//update ui with weather data

	//return data if you want idk
}