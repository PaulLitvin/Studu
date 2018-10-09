"use strict";
// решение грубовато, зато свое))
// жду критики
function getFriendlyNumbers(start, end) {
	
	if (typeof (start) != "number" || typeof (end) != "number" ||
		start > end || start < 0 || end < 0 || parseInt(start) != start || parseInt(end) != end) {
		console.log(false);
		return false;
	}
	//Здесь находим все делители для диапазона чисел и помещяем их в массив
	let arr = [];
	let finalArr = [];
	for (let i = start; i <= end; i++) {
		let arrNum = [];
		for (let j = 0; j < i; j++) {
			if (i % j == 0) {
				arrNum.push(j);
			}
		}
		arr.push(arrNum);
	}
 // Здесь находим суммы делителей для всех чисел и помещаем в обьект, чтобы 
 // нумерация совпадала с суммами делителей
	let arrSum = {};
	for (let i = 0; i < arr.length; i++) {
		let ar = 0;
		for (let j = 0; j < arr[i].length; j++) {
			ar += arr[i][j];
		}
		arrSum[start + i] = ar;
	}
	//здесь собственно и находим наши дружественные числа
	for (let i = start; i <= end; i++) {
		for (let j = start; j <= end; j++) {
			if (arrSum[j] == i && arrSum[i] == j && j != i && j > i) {
				let arrEuler = [];
				arrEuler.push(i);
				arrEuler.push(j);
				if (arrEuler.length == 2) {
					finalArr.push(arrEuler);
				}
			}
		}
	}
	return finalArr;
}
getFriendlyNumbers(1, 1210);
