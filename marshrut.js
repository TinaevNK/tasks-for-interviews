const data = [
  { from: "C.Петербург", to: "Минск" },
  { from: "Киев", to: "Новосибирск" },
  { from: "Череповец", to: "Москва" },
  { from: "Минск", to: "Киев" },
  { from: "Москва", to: "C.Петербург" },
];

const findTravelPath = (data) => {
  const list = [];
  const initialPoint = data.find(
    (el) => !data.map((e) => e.to).includes(el.from)
  );
  list.push(initialPoint);

  for (let i = 0; i < data.length - 1; i++) {
    const lastEl = list.at(-1);
    const next = data.find((el) => el.from === lastEl.to);
    list.push(next);
  }
  return list;
};

console.log(findTravelPath(data));
