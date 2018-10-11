let menuItems = document.querySelectorAll(".menu-item"),
	menu = document.querySelector(".menu"),
	item = document.createElement("li"),
	title = document.querySelector(".title"),
	adv = document.querySelector(".adv"),
	column = document.querySelectorAll(".column"),
	question = document.querySelector(".prompt");

menu.insertBefore(menuItems[2], menuItems[1]);

item.classList.add('menu-item');
item.textContent = 'Пятый пункт';
menu.appendChild(item);

document.body.style.background = "url('./img/apple_true.jpg') center no-repeat";

title.innerHTML = "Мы продаем только <b>подлинную</b> технику Apple";

column[1].removeChild(adv);
let prom = prompt("Как вы относитесь к технике Apple?", "");
question.innerHTML = prom;