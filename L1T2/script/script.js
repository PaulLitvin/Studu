//Можно так:

let num = 33721;
let strNum = "";
strNum += num;
var mult = 1;
for (var i = 0; i < strNum.length; i++) {
	mult = mult * strNum[i];
}
mult **= 3;
console.log((mult + "").slice(0, 2));

// Тот же результат, только код короче.
/*
let num = 33721;
let mult = ("" + num).split('').reduce((total, value) => total*value);
alert(+((mult **= 3)+"").slice(0, 2));
*/