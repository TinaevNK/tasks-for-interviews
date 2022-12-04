// напиши функцию, которая будет делать фетч гет запросы на урл,
// и в случае ошибки (любой), пробовать ещё 5 раз, а потом выдавать ошибку Не получилось

async function fetchCustom(url, counter = 0) {
  let count = counter;
  let res = 0;

  try {
    count += 1;
    let result = await fetch(url);
    res = await result.json();
  } catch {
    if (count >= 5) console.log(`error poluchaetsa count=${count}`);
    else fetchCustom(url, count);
  }

  return res;
}
fetchCustom("https://randomuserrrr.me/api/");
// fetchCustom("https://vk.com/feed");
