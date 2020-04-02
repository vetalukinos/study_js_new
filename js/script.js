'use strict';


let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function randomize() {
    return Math.ceil(Math.random() * 10);
}

function one() {
    let x = randomize();
    let start = confirm('Ты хочешь чыгрфть в игру?');
    if (start === true) {
        two();
    } else {
        alert ('Пока!');
    }
    function two() {
        let y = prompt('Угадай число от 1 до 100');
        if (!isNumber(y)) {
            alert('Введи число!');
            two();
        }
        y = +y;
        if (y > x) {
            alert ('Загаданное число меньше');
            two();
        } else if (y < x) {
            alert ('Загаданное число больше');
            two();
        } else if (y === x) {
           alert('Ты выиграл!')
            return;
        }
    }
}

one();



//Заменить на тернарники



