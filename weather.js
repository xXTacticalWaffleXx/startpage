const weather = document.querySelector('#weather');

const getWeather = async () => {
	//get json data from the api
	const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=California&appid=9eadbebea72109584f66e206ae0996b1');
	const json = await res.json();
	// get the temperature from the json and convert from kelvin to celcius
	var weatherText = Math.round(json.main.temp - 273.15);
	var weatherText = weatherText + "°C";
	// add the characters for the type of weather (clouds and the like)
	     if (json.weather[0].main == "Clouds"){	
	var weatherText = weatherText + " ☁";
	}
	else if (json.weather[0].main == "Rain"){	
	var weatherText = weatherText + " 🌧";
	}
	else if (json.weather[0].main == "Clear"){	
	var weatherText = weatherText + " ☀";
	}
	// add weatherText to the html doc
	weather.innerHTML = weatherText;
	}
