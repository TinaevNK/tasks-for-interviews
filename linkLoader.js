// Сделать функции загрузки данных по массиву ссылок и количеству доступных потоков,
// потоки не должны простаивать, порядок данных в итоговом массиве должен соответствовать порядку ссылок

const linkLoader = (urlsArr, limit, cb) => {
  let loadedUrlsQty = 0;
  let dataArr = new Array(urlsArr.length);
  let currentUrlsIndex = 0;

  const taskRuner = (urlIndex) => {
    if (loadedUrlsQty == urlsArr.length) {
      // проверяем что все ссылки загружены и задача выполнена
      cb(dataArr); // в результате надо вызвать колбэк с загруженными данными
    }

    if (currentUrlsIndex == urlsArr.length) {
      // следим за тем, что список линков кончился и запускать новую загрузку не надо
      return;
    }

    fetch(urlsArr[urlIndex]).then((data) => {
      dataArr[urlIndex] = data; // кладём загруженные данные по индексу из замыкания, чтобы сохранить порядок как у урлов
      loadedUrlsQty++; // увеличиваем счётчик загруженных урлов
      taskRuner(currentUrlsIndex); // запускаем функцию повторно
    });

    currentUrlsIndex++; // следим за тем под каким индексом надо будет загрузить следующий линк
  };
  for (let i = 0; i < limit; i++) {
    taskRuner(currentUrlsIndex);
  }
};
