'use strict';


let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};




function one() {
    let x = 10;
    let sum;

    function two(y) {
        y = prompt('Угадай число от 1 до 100');
        if (y > x) {
            return ('Загаданное число меньше');
        } else if (y < x) {
            return ('Загаданное число больше');
        } else if (!isNumber(y))  {
            return ('Введи число!');
        } else if (y === null) {
            return console.log(y);
        }
        sum += y; // ВОТ ЭТА СТРОКА СКОРЕЕ ВСЕГО ФИГНЯ КАКАЯ-ТО
        return sum; //
    }
    return two();
}

alert(one());







