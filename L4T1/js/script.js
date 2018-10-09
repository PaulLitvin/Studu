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
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let expens = prompt("Введите обязательную статью расходов в этом месяце", ""),
				howMuch = prompt("Во сколько обойдется?", "");
			if ((typeof (expens)) == 'string' && expens != null && (typeof (howMuch)) != null &&
				expens != '' && howMuch != '' && expens.length < 50) {
				appData.expenses[expens] = howMuch;
			} else {
				i--;
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ваш бюджет на один день: " + appData.moneyPerDay + " $");
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('Произошла ошибка!');
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какая сумма накоплений?", ""),
				percent = +prompt("Под какой процент?", "");

			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function () {
		for (let i = 1; i <= 3; i++) {
			let optExpens = appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
			if (typeof (optExpens) == 'string' && optExpens != null &&
				optExpens != '' && optExpens.length < 50) {
				appData.optionalExpenses[i] = optExpens;
			} else {
				i--;
			}
		}
	},
	chooseIncome: function () {
		let items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", ""),
			moreItems = prompt('Может что-то еще?');

		while (!isNaN(items) || items == "" || items == null ||
			!isNaN(moreItems) || moreItems == "" || moreItems == null) {
			items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
			moreItems = prompt('Может что-то еще?');
		}
		appData.income = items.split(', ');
		appData.income.push(moreItems);

		appData.income.forEach(function (element, index) {
			let num = index + 1;
			alert("Способы доп. заработка: " + num + ") " + element);
		});
	}
};

for (key in appData) {
	console.log(key);
}


/*
//Цикл while
let i  = 0;
while ( i<2 ) {
	let expens = prompt("Введите обязательную статью расходов в этом месяце", "");
	 	howMuch = prompt("Во сколько обойдется?", "");
	 if((typeof(expens)) == 'string' && (typeof(expens)) != null && (typeof(howMuch)) != null
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
	 if((typeof(expens)) == 'string' && (typeof(expens)) != null && (typeof(howMuch)) != null
	 	&& expens != '' && howMuch != '' && expens.length < 50){
	 	appData.expenses[expens] = howMuch;
	 console.log('done')
	 } else {
	 	i--;
	 }
	 i++;
}while( i < 2);
*/