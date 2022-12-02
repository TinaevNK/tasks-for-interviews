/**
 * Дан список целых чисел, повторяющихся элементов в списке нет.
 * Нужно преобразовать это множество в строку,
 * сворачивая соседние по числовому ряду числа в диапазоны.
 */

// решение через строку

const data = [1, 4, 5, 2, 3, 9, 8, 11, 0];

const zipArr = (arr) => {
  const result = arr
    .slice()
    .sort((a, b) => a - b)
    .reduce((acc, item, index, arr) => {
      if (!index) return `${item}`;
      const isItNext = item === arr[index - 1] + 1;
      if (!isItNext) return `${acc},${item}`;
      const isItFirstNext = acc.charAt(acc.length - 2) !== "-";
      if (isItFirstNext) return `${acc}-${item}`;
      return `${acc.slice(0, -1)}${item}`;
    }, "");

  return result;
};

console.log(zipArr(data));

// решение через массив

const compress = (list) => {
  let rez = [];
  const result = list
    .slice()
    .sort((a, b) => a - b)
    .reduce((acc, item, index, arr) => {
      if (!index) return [item];
      const isNext = item === arr[index - 1] + 1;
      if (!isNext) {
        acc.length > 1
          ? rez.push(`${acc[0]}-${acc[acc.length - 1]}`)
          : rez.push(`${acc[0]}`);
        acc = [item];
        return acc;
      } else {
        acc.push(item);
        return acc;
      }
    }, []);
  result.length > 1
    ? rez.push(`${result[0]}-${result[result.length - 1]}`)
    : rez.push(`${result[0]}`);
  return rez.join(",");
};

console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])); // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2])); // '1-4'
console.log(compress([1, 4])); // '1,4'
console.log(compress([1, 2])); // '1-2'

const ziping = (arr) => {
  let rs = [];
  let start = (end = null);

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; ++i) {
    if (start === null) start = arr[i];

    if (arr[i] + 1 === arr[i + 1]) end = arr[i + 1];
    else {
      rs.push(start !== null && end ? `${start}-${end}` : start);
      start = end = null;
    }
  }

  return rs.join(" => ");
};

console.log(ziping(data));
