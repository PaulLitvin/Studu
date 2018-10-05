let week = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

for (let i = 0; i < week.length; i++) {
	if (week[i] == "Sunday" || week[i] == "Saturday") {
		week[i] = week[i].bold();
	}
	if (week[i] == "Friday") {
		week[i] = week[i].italics();
	}
	document.write(week[i] + "</br>");
}

let arr = [
	988,
	6656,
	32157,
	3211,
	63265,
	7878,
	9987,
];

for (let i = 0; i < arr.length; i++) {
	let num = arr[i].toString();
	if (num.charAt(0) == 7 || num.charAt(0) == 3) {
		console.log(arr[i]);
	}
}