"use strict";

// 1) Строка начинаеться с большой буквы
let str = "урок-3-был слишком легким";
str = str.split("");
str[0] = str[0].toUpperCase();

// 2) Заместить все  "-" на пробелы, результат выведеться в консоль
str = str.map( value => {
	if (value == "-") {
		value = " ";
	}
	return value;
});

str = str.join('');
console.log(str);

// 3) Вырезать из строки слово "легким" и вывести результат на экран
let subst = str.indexOf("легким");
subst = str.slice(subst).split("");

for (let i = 0; i < 2; i++) {
	subst[subst.length - 1 - i] = "o";
}
document.write(subst.join(''));

// 4) Вывести в консоль квадратный корень из суммы кубов его элементов 
let arr = [20, 33, 1, "Человек", 2, 3];
//* Отсортировать числа
arr = arr.filter(value => {
	if (typeof (value) == "number") {
		return value;
	}
});
//* Все значения массива в куб
arr = arr.map(value => value = Math.pow(value, 3));

//*Сумма значений массива
arr = arr.reduce( (total, value) => total + value);

//*Вывести в консоль корень квадратный из полученного результата
console.log(Math.sqrt(arr));

// 5) Функция принимающая 1 аргумент строку
function takeArgument(str) {
	if (typeof (str) !== "string") {
		console.log(str + " not a string!");
	}
	//*убирает все пробелы в начале и в конце
	str = str.trim();
	str = str.split("");
	//*выводит первые 50 символов, остальное заменяется на "..."	
	if (str.length > 50) {
		str = str.slice(0, 50);
		console.log(str.join("") + "...");
	}
}
takeArgument(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eveniet tenetur magni inventore voluptatum fuga nulla totam ullam cum voluptas, dolore delectus, atque nobis modi! Rem alias nisi cupiditate eum. ");
