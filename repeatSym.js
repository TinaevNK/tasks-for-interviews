// найти количество опредеёонных символов в строке

let count = 0; // инициализируем переменную, которая будет выступать в роли счетчика

const charCount = (char, someString) => {
    for (let i = 0; i < someString.length; i++) {
        someString.charAt(i) == char ? count++ : false; //проверяем содержится переданный символ по данному индексу, если да то инкрементируем переменную
    }
    console.log( count ); // выводим значение переменной
    count = 0; // присваиваем переменной значение 0
}
charCount("x", "xxaxx"); // результат 4
