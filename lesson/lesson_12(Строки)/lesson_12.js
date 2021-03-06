// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    str = str.charAt(0).toUpperCase() + str.substring(1);
    return str;
}

console.log(ucFirst('вася'));

// =================================

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
    if (str.toUpperCase().includes('xxx'.toUpperCase()) || str.toUpperCase().includes('viagra'.toUpperCase())) {
        return true;
    }
    return false
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

console.log (checkSpam('buy ViAgRA now'));
console.log (checkSpam('free xxxxx'));
console.log (checkSpam("innocent rabbit"));

// ======================================

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

// function truncate(str, maxlength) {
//     let strLen;
//     if (str.length > maxlength) {
//         strLen = str.substring(0,maxlength - 1) + '...';
//         return strLen
//     }
//     return str
// }

function truncate (str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength -1 ) + '...';
    }
    return str;
}


console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20))

// ======================================

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue ( str ) {
    let num = 0;
    num = +str.slice(1);
    console.log(num);
}

extractCurrencyValue("$120")