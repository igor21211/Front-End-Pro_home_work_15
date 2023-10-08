'use strict'

/*
Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач.
Значення всіх елементів всіх масивів задає користувач.
* */

const createArray = () => {
    const row = parseInt(prompt('Set count of row in the array'));
    const column = parseInt(prompt('Set count of column in the array'));
    if (!isNaN(row) && !isNaN(column)) {
        const array = [];
        for (let i = 0; i < row; i++) {
            array[i] = [];
            for (let j = 0; j < column; j++) {
                const value = parseInt(prompt(`Set values for element ${i} ${j}`));
                array[i][j] = value;
            }
        }
        return array;
    }
}

const result = createArray();
alert(`Your array: ` + result);




