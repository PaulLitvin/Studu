let money,
	time;

function start() {
	money = +prompt("Ваш бюджет на месяц? (В долларах)", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц? (В долларах)", "");
	}
}

start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let expens = prompt("Введите обязательную статью расходов в этом месяце", ""),
			howMuch = prompt("Во сколько обойдется?", "");
		if ((typeof (expens)) == 'string' && expens != null && howMuch != null &&
			expens != '' && howMuch != '' && expens.length < 50) {
			appData.expenses[expens] = howMuch;
		} else {
			i--;
		}
	}
}

chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Ваш бюджет на один день: " + appData.moneyPerDay + " $");
}

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('Минимальный уровень достатка');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('Средний уровень достатка');
	} else if (appData.moneyPerDay > 2000) {
		console.log('Высокий уровень достатка');
	} else {
		console.log('Произошла ошибка!');
	}
}

function checkSavings(argument) {
	if (appData.savings == true) {
		let save = +prompt("Какая сумма накоплений?", ""),
			percent = +prompt("Под какой процент?", "");

		appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();

function chooseOptExpenses() {
	for (let i = 1; i <= 3; i++) {
		let optExpens = appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
		if (typeof(optExpens) == 'string' && optExpens != null && 
		optExpens != '' && optExpens.length < 50) {
				appData.optionalExpenses[i] = optExpens;
		} else {
			i--;
		}
	}
}
chooseOptExpenses();
/*
//Цикл while
let i  = 0;
while ( i<2 ) {
	let expens = prompt("Введите обязательную статью расходов в этом месяце", "");
	 	howMuch = prompt("Во сколько обойдется?", "");
	 if((typeof(expens)) == 'string' && (typeof(expens)) != null && howMuch != null
	 	&& expens != '' && howMuch != '' && expens.length < 50){
	 	appData.expenses[expens] = howMuch;
	 console.log('done')
	 } else {
	 	i--;
	 }
	 i++;
};
*/

// Цикл do while
/*
let i = 0;
do{
	let expens = prompt("Введите обязательную статью расходов в этом месяце", "");
	 	howMuch = prompt("Во сколько обойдется?", "");
	 if((typeof(expens)) == 'string' && (typeof(expens)) != null && howMuch != null
	 	&& expens != '' && howMuch != '' && expens.length < 50){
	 	appData.expenses[expens] = howMuch;
	 console.log('done')
	 } else {
	 	i--;
	 }
	 i++;
}while( i < 2);
*/
