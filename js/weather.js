const weather = document.querySelector('#weather');
const time = document.querySelector('#time');

const getWeather = async () => {
	//get json data from the api
	const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=52&lon=-2&appid=9eadbebea72109584f66e206ae0996b1');
	const json = await res.json();

	let weatherText = '';

	// choices: C (celsius) K (kelvin) F (fahrenheit)
	const tempScale = 'C'

	switch (tempScale) {
		case 'C':
			weatherText = `${getCelciusFromKelvin(json.main.temp)}°C`;
			break;
		case 'K':
			weatherText = `${getFahrenheitFromKelvin(json.main.temp)}°F`;
			break;
		case 'F':
			weatherText = `${Math.round(json.main.temp)}°K`;
			break;
	}

	if (json.weather[0].main == "Clouds" || json.weather[0].main == "Haze") {
		weatherText += " ☁";
	}
	else if (json.weather[0].main == "Rain" || json.weather[0] == "Drizzle") {
		weatherText += " 🌧";
	}
	else if (json.weather[0].main == "Clear") {
		weatherText += " ☀";
	}

	// add weatherText to the html doc
	weather.innerHTML = weatherText;
}

function getCelciusFromKelvin(kelvin) {
	return Math.round(kelvin - 273.15) // kelvin is just celcius but with absolute zero as its zero
}

function getFahrenheitFromKelvin(kelvin) {
	celcius = getCelciusFromKelvin(kelvin) // most fahrenheit conversion formulas have you convert to celcius first
	return Math.round(celcius * 1.8 + 32)
}

