"use strict";

let date = new Date(),
	currentTime = document.createElement('div'),
	currentDay = document.createElement('div'),
	inputBlock = document.createElement('div'),
	firstDay = document.createElement('input'),
	secondDay = document.createElement('input'),
	result = document.createElement('input'),
	button = document.createElement('button'),
	currentDate = document.querySelector('.current-date'),
	currentDayBlock = document.querySelector('.current-day'),
	inputDate = document.querySelectorAll('.input-date'),
	culculateBtn = document.querySelector('.calculate-btn');

currentDayBlock.style.display = "flex";
result.style.display = "none";

currentDate.appendChild(currentTime);
currentDayBlock.appendChild(currentDay);
// Вывод на экран даты и текущего дня
function show(argument) {
	currentTime.innerHTML = setCurrent(new Date().getHours()) + ":" + setCurrent(new Date().getMinutes()) + ":" + setCurrent(new Date().getSeconds()) + " "+
	setCurrent(date.getDate()) + ":" + setCurrent(date.getMonth() + 1) + ":" + date.getFullYear();
	currentDay.innerHTML = setCurrentDay(date.getDay());
}
show();
//Интервал для вывода текущего времени
let interval = setInterval(function () {
	show();
}, 1000);
//Функция которая добавляет нули дням и месяцам там где это необходимо
function setCurrent(time) {
	if (time < 10) {
		time = "0" + time;
	}
	return time;
}

function setCurrentDay(day) {
	let days = [
		"Восткресенье",
		"Понедельник",
		"Вторник",
		"Среда",
		"Четверг",
		"Пятница",
		"Суббота"
	];

	for (let i = 0; i < days.length; i++) {
		if (i == day) {
			return days[i];
		}
	}
}
//функция создает поля для ввода дат, вывода результата и кнопку для расчета
function inputCreate() {
	firstDay.id = "first";
	secondDay.id = "second";
	result.id = "result";
	button.innerHTML = "Calculate";
	inputDate[0].appendChild(firstDay);
	inputDate[1].appendChild(secondDay);
	inputDate[2].appendChild(result);
	culculateBtn.appendChild(button);
	document.body.appendChild(inputBlock);
}
inputCreate();


//Обработчик событий - при клике расчитывает количество дней между датами
button.addEventListener('click', function () {
	let dateFirst = firstDay.value.split("");
	let dateSecond = secondDay.value.split("");
	for (let i = 0; i < dateFirst.length; i++) {
		if (dateFirst[i] == "." || dateFirst[i] == ",") {
			dateFirst[i] = " ";
		}
		if (dateSecond[i] == "." || dateSecond[i] == ",") {
			dateSecond[i] = " ";
		}
	}

	dateFirst = dateFirst.join('').split(" ");
	dateSecond = dateSecond.join('').split(" ");

	for (let i = 0; i < dateFirst.length; i++) {
		if (dateFirst[i].length == 2 && dateFirst[i] < 10) {
			dateFirst[i] = dateFirst[i][1];
		}
		if (dateSecond[i].length == 2 && dateSecond[i] < 10) {
			dateSecond[i] = dateSecond[i][1];
		}
		if (i === 1) {
			dateFirst[1] = dateFirst[1] - 1;
			dateSecond[1] = dateSecond[1] - 1;
		}
	}
	result.style.display = "inline-block";
	let date = new Date(dateFirst[2], dateFirst[1], dateFirst[0]);
	date = Date.parse(date);
	let date1 = new Date(dateSecond[2], dateSecond[1], dateSecond[0]);
	date1 = Date.parse(date1);
	result.value = Math.abs(Math.round((date - date1) / 86400000));
});