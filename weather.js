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

function GetCelciusFromKelvin(kelvin) {
  return Math.round(kelvin - 273.15) // kelvin is just celcius but with absolute zero as its zero
}

function GetFahrenheitFromKelvin(kelvin) {
  celcius = kelvin - 273.15 // most fahrenheit conversion formulas have you convert to celcius first
  return Math.round(celcius * 1.8 + 32)
}
const weather = document.querySelector('#weather');

const getWeather = async () => {
	//get json data from the api
	const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=52&lon=-2&appid=9eadbebea72109584f66e206ae0996b1');
	const json = await res.json();

	const temp_scale = 1 //1 = C 2 = F 3 = K
	
	if (temp_scale == 1){
		var weatherText = GetCelciusFromKelvin(json.main.temp);
		var weatherText = weatherText + "°C";
	} else if (temp_scale == 2){
		var weatherText = GetFahrenheitFromKelvin(json.main.temp)
		var weatherText = weatherText + "°F";
	} else if (temp_scale == 3){
		var weatherText = Math.round(json.main.temp)
		var weatherText = weatherText + "°K";
	}

	if (json.weather[0].main == "Clouds" || json.weather[0].main == "Haze"){	
		var weatherText = weatherText + " ☁";
	}
	else if (json.weather[0].main == "Rain" || json.weather[0] == "Drizzle"){	
		var weatherText = weatherText + " 🌧";
	}
	else if (json.weather[0].main == "Clear"){	
		var weatherText = weatherText + " ☀";
	}

	
	// add weatherText to the html doc
	weather.innerHTML = weatherText;
	}
