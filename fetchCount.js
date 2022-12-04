// напиши функцию, которая будет делать фетч гет запросы на урл,
// и в случае ошибки (любой), пробовать ещё 5 раз, а потом выдавать ошибку Не получилось

function fetchCustom(url) {
  let count = 0;
  let res = 0;

  while (!Boolean(res) && count < 5) {
    console.log(count);
    console.log(res)
    count+=1;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res = data;
        console.log(`получилось, count=${count}, res=${res}`);
      })
      .catch((err) => console.log(`ошибка, count=${count}`))
  }
}

fetchCustom("https://randomuser.me/api/");
