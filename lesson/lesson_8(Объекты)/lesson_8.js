// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user = {
//     name: 'John',
//     surname: 'Smith',
// }

// console.log(user.name);

// user.name = 'Pete';

// console.log(user.name);

// delete user.name;

// console.log(user);

// ====================================

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }


// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// =================================

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;


// for (let key in salaries) {
//     sum += salaries[key];
// }


// alert(sum);

// let sum = 0;

// function pay(obj) {
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }

// alert(pay(salaries));



// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// ==============================

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// до вызова функции



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] = obj[key] * 2;
//         }
//     }
// }

// multiplyNumeric(menu);

// console.log(menu);
// после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };



// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.





