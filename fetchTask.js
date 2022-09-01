const getKane = () => {
  return fetch("https://api.kanye.rest")
    .then(res => {
      res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then(data => console.log(data))
    .catch((err) => console.log(err))
};

getKane();
