const getKane = () => {
  return fetch("https://api.kanye.rest")
    .then(res => {
      if (res.ok) return res.json();

      /* отклоняем промис, чтобы перейти
    в блок catch, если сервер вернул ошибку */
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then(data => console.log(data))
    .catch((err) => console.log(err))
};

getKane();
