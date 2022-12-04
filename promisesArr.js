// у нас есть массив промисов
// и нужно написать функцию которая вернет промис с массивом результатов в виде [{status: "resolved", value: some_value},  {status: "rejected", error: reason}]

function reflect(promise) {
  return promise
    .then((v) => {
      return { status: "fulfilled", value: v };
    })
    .catch((error) => {
      return { status: "rejected", reason: error };
    });
}

const promises = [
  fetch("https://dzen.ru/?yredirect=true"),
  fetch("https://habr.com/ru/post/459970/"),
];
const results = await Promise.all(promises.map(reflect));
console.log(results);
