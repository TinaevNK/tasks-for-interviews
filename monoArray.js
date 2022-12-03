// проверка на монотоность массива

const data = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
const data1 = [7, 5, 3, 1];
const data2 = [4, 0, 3, 1];
const data3 = [5, 4, 3];

const arrMono = (arr) =>
  arr.every((el, i) => i === 0 || el <= arr[i - 1]) ||
  arr.every((el, i) => i === 0 || el >= arr[i - 1]);

console.log(arrMono(data)); // true
console.log(arrMono(data1)); //true
console.log(arrMono(data2)); //false
console.log(arrMono(data3)); //true
