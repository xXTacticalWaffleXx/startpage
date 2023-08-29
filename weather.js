/*Copyright(C) 2022 luna aphelion <luna-aphelion@proton.me>

This program is free software : you can redistribute itand /or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.If not, see < https://www.gnu.org/licenses/>. */


const weather = document.querySelector('#weather');

const getWeather = async () => {
	//get json data from the api
	const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=52&lon=-2&appid=9eadbebea72109584f66e206ae0996b1');
	const json = await res.json();
	// get the temperature from the json and convert from kelvin to celcius
	var weatherText = Math.round(json.main.temp - 273.15);
	var weatherText = weatherText + "°C";
	// add the characters for the type of weather (clouds and the like)
	     if (json.weather[0].main == "Clouds"){	
	var weatherText = weatherText + " ☁";
	}
	else if (json.weather[0].main == "Rain" || json.weather[0] == "Drizzle"){	
	var weatherText = weatherText + " 🌧";
	}
	else if (json.weather[0].main == "Clear"){	
	var weatherText = weatherText + " ☀";
	}
	else if (json.weather[0].main == "Haze"){
		var weatherText = weatherText + " ☁";
	}
	
	// add weatherText to the html doc
	weather.innerHTML = weatherText;
	}
