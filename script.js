// ## Розв'язки задач:

// Оператор if

// 1. Перевірка часу:

let hour = 10; // Приклад, змініть значення для перевірки

if (hour < 12) {
  console.log("Доброго ранку!");
}

// 2. Перевірка віку:

let age = 20; // Приклад, змініть значення для перевірки

if (age >= 18) {
  console.log("Ви повнолітній");
}

// Оператор if else

// 3. Парність числа:

let number = 7; // Приклад, змініть значення для перевірки

if (number % 2 === 0) {
  console.log("Число парне");
} else {
  console.log("Число непарне");
}

// Оператор if else if

// 4. Оцінка за балами:

let score = 75; // Приклад, змініть значення для перевірки

if (score >= 90 && score <= 100) {
  console.log("Відмінно");
} else if (score >= 70 && score <= 89) {
  console.log("Добре");
} else if (score >= 50 && score <= 69) {
  console.log("Задовільно");
} else {
  console.log("Незадовільно");
}

// 5. Визначення пори року:

let month = 5; // Приклад, змініть значення для перевірки

if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Літо");
} else if (month >= 9 && month <= 11) {
  console.log("Осінь");
} else {
  console.log("Зима");
}

// Оператор switch case

// 6. Обмін валют:

let currency = "USD"; // Приклад, змініть значення для перевірки
let amount = 100;
let rateUSD = 37; // Курс долара
let rateEUR = 40; // Курс євро
let rateGBP = 45; // Курс фунта стерлінгів

switch (currency) {
  case "USD":
    console.log(`${amount} USD = ${amount * rateUSD} UAH`);
    break;
  case "EUR":
    console.log(`${amount} EUR = ${amount * rateEUR} UAH`);
    break;
  case "GBP":
    console.log(`${amount} GBP = ${amount * rateGBP} UAH`);
    break;
  default:
    console.log("Невідома валюта");
}

// Тернарний оператор

// 7. Повідомлення про знижку:

let purchaseAmount = 1200; // Приклад, змініть значення для перевірки

let message = purchaseAmount > 1000 ? "Знижка 10%" : "Без знижки";
console.log(message);
