let money = +prompt("Ваш бюджет на месяц? (В долларах)", ""),
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

for(let i = 0; i < 2; i++){
	let expens = prompt("Введите обязательную статью расходов в этом месяце", ""),
	 	howMuch = prompt("Во сколько обойдется?", "");
	 if((typeof(expens)) == 'string' && (typeof(expens)) != null && (typeof(howMuch)) != null 
	 && expens != '' && howMuch != '' && expens.length < 50){
	 	appData.expenses[expens] = howMuch;
	 } else {
	 	i--;
	 }
}

appData.moneyPerDay = appData.budget/30;

alert("Ваш бюджет на один день: " + Math.ceil(appData.moneyPerDay) + " $");

if(appData.moneyPerDay < 100 ) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if ( appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка!');
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