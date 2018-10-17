let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yaerSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	expensesItem = document.querySelectorAll('.expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money,
	time;

optionalExpensesBtn.setAttribute('disabled', 'disabled');
countBtn.setAttribute('disabled', 'disabled');
expensesBtn.setAttribute('disabled', 'disabled');


startBtn.addEventListener('click', function (event) {
	event.preventDefault();

	optionalExpensesBtn.removeAttribute('disabled', 'disabled');
	countBtn.removeAttribute('disabled', 'disabled');
	expensesBtn.removeAttribute('disabled', 'disabled');


	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц? (В долларах)", "");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц? (В долларах)", "");
	}

	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();

	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {

	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let expens, howMuch;
		expens = expensesItem[i].value;
		howMuch = expensesItem[++i].value;
		appData.expenses[expens] = howMuch;
		sum += +howMuch;

	}
	expensesValue.textContent = sum;

});

optionalExpensesBtn.addEventListener('click', function () {

	if (optionalExpensesValue.textContent != '') {
		optionalExpensesValue.textContent = '';
	}

	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let optExpens = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = optExpens;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}


});

countBtn.addEventListener('click', function () {
	if (expensesValue.textContent != '') {
		appData.budget -= +expensesValue.textContent;
	}
	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Средний уровень достатка';
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = 'Высокий уровень достатка';
		} else {
			levelValue.textContent = 'Произошла ошибка!';
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}
});

incomeItem.addEventListener('input', function () {

	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {

	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yaerSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		if (appData.savings == true) {
			let sum = +sumValue.value,
				percent = +percentValue.value;

			appData.monthIncome = sum / 100 / 12 * percent;
			appData.yearIncome = sum / 100 * percent;

			monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
			yaerSavingsValue.textContent = appData.yearIncome.toFixed(1);
		}
	}
});

expensesItem.forEach(function (element, i, arr) {
	element.addEventListener('input', function () {
		let ar = [];
		let num = /[0-9]/gi;
		let num1 = element.value.match(num);
		if (i % 2 != 0) {
			if (num1 == null) {
				element.value = '';
			}
		}
		for (let j = 0; j < arr.length; j++) {
			if (arr[j].value == '') {
				ar.push(arr[j].value);
			}
		}
		if (ar.length == 0) {
			expensesBtn.removeAttribute('disabled', 'disabled');
		}
	});
});

optionalExpensesItem.forEach(function (element, i, arr) {
	element.addEventListener('input', function () {
		let ar = [];
		let ru = /[А-Яа-я]/gi;
		let str = element.value.match(ru);
		if (str != null) {

			for (let j = 0; j < arr.length; j++) {
				if (arr[j].value == '') {
					ar.push(arr[j].value);
				} else {
					ar.pop();
				}
			}
		} else {
			element.value = '';
		}
		if (ar.length == 0) {
			optionalExpensesBtn.removeAttribute('disabled', 'disabled');
		} else {
			optionalExpensesBtn.setAttribute('disabled', 'disabled');
		}
	});
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};
