// 1) Function Declaration
// function name(параметры, через, запятую) {
//   /* тело, код функции */
// }

// function showGreeting( message, number ) {
//  console.log(message, number);
// }

// if (true) {
// 	showGreeting('blablabla');
// }







// function sumAandB() {
//  let a = 5;
//  let b = 10;
//  let sumAB = a + b;
//  console.log(sumAB);
// }
// sumAandB()




// function sumAB(a, b) {
//  console.log(a + b);
// }

// showGreeting();
// sumAandB();
// sumAB(2, 3); // 5





// function showMessage() {
//  let message = 'Hello World';
//  console.log(message);
// }

// showMessage();
// console.log(message); // Invisable







// let firstName = 'Vasya';

// function greetName() { // нашли функцию
//  console.log(`Hello ${firstName}`); // ищем firstName
//  console.log('Hello ' + firstName);
//  console.log('Hello ${firstName}');
// }

// greetName(); // 1 вызвали функцию





// let a = 5;
// let b = 10;
// console.log(`sum = ${a > 10 ? a : b}`);




// function anyName( firstName ) {
//  console.log(firstName);
// }

// anyName('Petya');
// console.log(firstName);





// дефолтное значение "="
// на случай, если атрибут не передан
// function sayHello(firstName = 'Unknow User') {
//  console.log(`Hello ${firstName}`);
// }

// sayHello('Vasya'); // Hello Vasya
// sayHello(); // Hello Unknow User

// function getSum(a, b) {
//  return a + b;
// }

// let sumSum = getSum(10, 2) + getSum(5, 2);
// console.log(sumSum);


// console.log(getSum('Hello ', 'World'));





// let wallet = 100;// 60

// function paid(orderSum) { // 40
//  if (wallet >= orderSum) { // 100 >= 40 == true
//    changeWallet(orderSum);
//    return 'Bought';
//  }
//  return 'No enough money';
// }

// function changeWallet(sum) { // 40
//  wallet = wallet - sum; // 60
//  console.log(`Balance: ${wallet}`);
// }

// console.log(paid(150));
// console.log(paid(40));
// console.log(paid(20));

//Function Expression
// let sayHi = function ( ) {
//  console.log('Hello');
//  return 12345
// };

// console.log(sayHi());










// 2) Function Expression функциональное выражение
// let sayHi = function() {
//   alert( "Привет" );
// };



// // Мы можем скопировать функцию в другую переменную:

// function sayHi() {   // (1) создаём
//   alert( "Привет" );
// }

// let func = sayHi;    // (2) копируем

// func(); // Привет    // (3) вызываем копию (работает)!
// sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)











// Arrows Function - стрелочные функции
// const func = (arg1, arg2) => {
//  return arg1 + arg2;
// };

// const func1 = (arg1, arg2) => arg1 + arg2;

// const func2 = (arg1, arg2) => (arg2 === 0 ? 'Devision by zero' : arg1 / arg2);

// const double = (n) => n * 2;
// console.log(double(5))

// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//   let result = a + b;
//   return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
// };

// alert( sum(1, 2) ); // 3











// Callback functions
// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// function sayGoodBye(name) {
//   console.log(`GoodBye ${name}`);
// }

// function showMessage(callbackSay, name) { // sayGoodBye, 'Irina'
//   callbackSay(name);
// }

// showMessage(sayHello, 'Ivan'); // аргументы передали 
// showMessage(sayGoodBye, 'Irina');





// showMessage((name) => {
//   console.log(`How are you, ${name}`);
// }, 'Ivan');










// Итого
// Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
// Если функция объявлена как отдельная инструкция в основном потоке кода, то это Function Declaration.
// Если функция была создана как часть выражения, то считается, что эта функция объявлена при помощи Function Expression.
// Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
// Функции, объявленные при помощи Function Expression, создаются, только когда поток выполнения достигает их.















// Задача
// Напишем несколько функцию, которая будет проверять тип данных и если
// это будет строка, то проверять сколько в ней символов и выводить результат в console.log,
// если это будет число, то нужно переводить в строку и выводить результат в console.log количество символов
// после того как мы вывели количество символов нужно вывести 
// символ за символом в консоль в формате ('abc') 1 - 'a', 2 - 'b', 3 - 'c'
// если это что-то другое, то console.log должен сообщить что это неверный тип данных

// реализуйте его во всех трех синтаксисах функций
// в чем разница между ними?