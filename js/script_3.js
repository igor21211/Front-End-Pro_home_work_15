'use strict'

/*
*
*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
* поверне нам "heo wor".
* Вихідний рядок та символи для видалення задає користувач.
*
*/

const deleteElement = () => {
    const stringArray = prompt('Set string');
    const elements = prompt("set characters to delete");
    let result = '';
    if (elements != null && stringArray && stringArray != null) {
        let array = stringArray.split('');
        for (let i = 0; i < array.length; i++) {
            if(!elements.includes(stringArray[i])){
                result+= stringArray[i]
            }
        }
        return result;
    }else{
        return 'Something wrong'
    }
}
const result = deleteElement();
alert(result)