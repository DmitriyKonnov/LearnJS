// Проверка логина

// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let user = prompt('Кто там?', '');



// if (user == 'Админ') {

//     let password = prompt('Введите пароль', '');

//     if (password == 'Я главный') {
//         alert('Здравствуйте');
//     } else if (password == '' || password == null) {
//         alert('Отменнено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (user == '' || user == null) {
//     alert('Отмена');

// } else {
//     alert('Я вас не знаю');
// }


// ========================
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age = prompt('Сколько лет', '');

// if (age >= 14 && age <= 90) {
//     alert('Вё ок');
// } else {
//     alert('Не ок');
// }

// ==============================

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// let age = prompt('Сколько лет', '');

// if (age < 14 || age > 90) {
//     alert('Всё ок');
// } else {
//     alert('Не ок');
// }

let age = prompt('Сколько лет', '');

if (!(age >= 14 && age <= 90)) {
    alert('Всё ок');
} else {
    alert('Не ок');
}