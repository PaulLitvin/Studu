let money = prompt("Ваш бюджет на месяц? (В долларах)", ""),
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

let expens1 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses[expens1] = prompt("Во сколько обойдется?", "");
let expens2 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses[expens2] = prompt("Во сколько обойдется?", "");

alert("Ваш бюджет на один день: " + Math.ceil(+money / 30) + " $");

