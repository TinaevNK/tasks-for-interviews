const data = [3, 2, 1, 5, 6, -1, 10]; // => -1,1-3,5-6,10
console.log(data.sort((a, b) => a - b)) // -1, 1, 2, 3, 5, 6, 10

const zipArr = arr => {
    const result = arr
      .slice()
      .sort((a, b) => a - b)
      .reduce((acc, item, index, arr) => {
        if (!index) return `${item}`;
        const isItNext = item === arr[index-1] + 1;
        if (!isItNext) return `${acc}, ${item}`;
        const isItFirstNext = acc.charAt(acc.length - 2) !== '-';
        if (isItFirstNext) return `${acc}-${item}`;
        return `${acc.slice(0, -1)}${item}`;
      }, '');

    return result;
  }

console.log(zipArr(data));

