const weather = document.querySelector('#weather');

const getWeather = async () => {
	const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=9eadbebea72109584f66e206ae0996b1');
	const json = await res.json();
	console.log(json.main.temp);
	weather.innerHTML = json.main.temp;
}
