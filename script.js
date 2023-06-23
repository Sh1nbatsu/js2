// Задание 1

// let country = "Sweden";

// let access = country == "Sweden" ? true : false;

// console.log(access);

// Задание 2

// let number = 10;

// for (let i = 0; i < 10; i++) {
//   number++;
// }

// console.log(number);

// Задание 3

// for (let i = 0; i < 10; i += 2) {
//   let ten = +prompt("Введите число");
//   if (ten === 10) {
//     console.log("Число равно 10");
//   } else {
//     console.log("Число не равно 10");
//   }
// }

// Задание 4

// let start = +prompt("С какого числа начать?");

// let count = +prompt("Введите количество чисел");

// for (let i = start; i < count + start; i++) {
//   console.log(i ** 2);
// }

// Задание 5

// for (let i = 1; i < 100; i++) {
//   if ((i % 3 === 0) & (i % 5 === 0)) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else console.log(i);
// }

// Задание 6

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
//   }

// let i = 0;

// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Задание 7

// function squared(min, max) {
//   while (max >= min) {
//     console.log(min ** 2);
//     min++;
//   }
// }

// squared(1, 5);

// Задание 8

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandomRgb() {
//   let r = getRandomInteger(0, 255);
//   let g = getRandomInteger(0, 255);
//   let b = getRandomInteger(0, 255);
//   console.log(`rgb(${r},${g},${b})`);
// }

// getRandomRgb();

// Задание 9

// function stepUp(n) {
//   for (let i = 1; i <= n; i += 0.5) {
//     if (i % 1 === 0) {
//       console.log(i + " integer");
//     } else {
//       console.log(i + " decimal");
//     }
//   }
// }

// stepUp(5);

// Задание 10;

// let examScore = +prompt("Введите балл за экзамен");

// let projectQuantity = +prompt("Введите количество выполненных проектов");

// let total;

// if (projectQuantity >= 10 || examScore >= 90) {
//   total = 100;
// } else if (projectQuantity >= 5 && examScore >= 75) {
//   total = 90;
// } else if (projectQuantity >= 2 && examScore >= 50) {
//   total = 75;
// } else {
//   total = 0;
// }

// console.log(total);

// Задание 11

// function calcPrice(rentDays) {
//   let discount = 0;

//   if (rentDays >= 7) {
//     discount = 50;
//   } else if (rentDays >= 3) {
//     discount = 20;
//   }

//   console.log("Итоговая стоимость аренды - ", rentDays * 40 - discount);
// }

// calcPrice(7);
