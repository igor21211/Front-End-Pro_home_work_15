'use strict'

/*
Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
*/

const doMath = (x, znak, y) => {
    switch (znak){
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
        case '%':
            return x % y;
            break;
        case '^':
            return x ^ y;
            break;
        default:
            return 'Something wrong'
    }
}

const firstNumber = parseFloat(prompt('Set first number'));
const action = prompt("Set action with two numbers / accepted actions (+, -, *, /, %, ^")
const secondNumber = parseFloat(prompt('Set second number'));

if(!isNaN(firstNumber) && !isNaN(secondNumber) && action != null && action){
    alert(doMath(firstNumber,action,secondNumber));
}else{
    alert("Something wrong")
}