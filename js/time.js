function startTime() {
	const now = new Date();
	let suffix = "AM"
	let h = now.getHours();
	let m = now.getMinutes();
	let s = now.getSeconds();
	m = addZeroToBeginning(m);
	s = addZeroToBeginning(s);

	if (h > 12) {
		h -= 12
		suffix = "PM"
	}

	document.getElementById('clock').innerHTML = `${h}:${m}|${suffix}`;

	setTimeout(startTime, 1000);
}

function addZeroToBeginning(i) {
	if (i < 10) i = "0" + i;
	return i;
}

function getDate() {
	const today = new Date();

	day = String(today.getDate()).padStart(2, '0');
	month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	year = String(today.getFullYear()).replace("20", "");

	// choices: 'DD-MM-YY' 'MM-DD-YY'
	const date_format = 'DD-MM-YY';
	const date = date_format.replace('DD', day).replace('MM', month).replace('YY', year);

	document.querySelector('#date').innerHTML = date;
}

