'use strict'

/*
Дано масив з елементами різних типів.
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
*/

const array = [2,true,'string',5,'hello',{id:2,x:4},8,'frfds',6,'234234', false];
const numbersAverage = (arr) => {
   const sum =  arr.reduce((accumulator, currentValue) => {
      if(typeof currentValue === 'number'){
          return  accumulator + currentValue;
      }
       return accumulator;
    },0)
    console.log(sum)
    const count = arr.reduce((accumulator,currentValue) => {
        if(typeof currentValue === 'number'){
            return accumulator+1;
        }
        return accumulator;
    },0)
    console.log(count)

    return sum/count;
}

console.log(numbersAverage(array));