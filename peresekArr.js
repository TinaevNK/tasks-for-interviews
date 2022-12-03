// написать функцию для поиска пересечения массива

const peresekArr = (arrOne, arrTwo) => arrOne.filter(val => arrTwo.includes(val));

console.log(peresekArr([1,2,3], [2,3,4,5]))
