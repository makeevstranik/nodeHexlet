const myMap = (arr, fn) => { // бесконечно быстрее версии на рекурсии
  if (arr.length === 0) return arr;
  function* gen(seq) {
    for (let elem of seq) {
      yield fn(elem);
    }
  }
  return [...gen(arr)];
};

const hMap = (arr, fn, callback) => {
  if (arr.length === 0) return arr;
  const iter = ([head, ...rest], acc) => {
    const newAcc = [...acc, fn(head)];
    if (rest.length === 0) return newAcc;
    return iter(rest, newAcc);
  };
  return iter(arr, []);
};

const myAsyncMap = (arr, fn, callback) => { // моя быстрая версия map на  генераторе
  if (arr.length === 0) {
    callback(arr);
    return;
  }
  function* gen(seq) {
    for (let elem of seq) {
      yield fn(elem);
    }
  }
  let acc = [];
  let generator = gen(arr);
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      acc.push(generator.next().value);
      if (i === arr.length -1) callback(acc);
    }, 10);
  }
};

//  стек не переполняется рекурсивными вызовами при ассинхронном коде!?
// Однако это  виснет на 1000 элементах. Бесконечно медленнее версии на генераторе
const hAsyncMap = (arr, fn, callback) => {
  if (arr.length === 0) {
    callback(arr);
    return;
  }
  const iter = ([head, ...rest], acc) => {
    const newAcc = [...acc, fn(head)];
    if (rest.length === 0) {
      callback(newAcc);
      return;
    }
    setTimeout(iter, 10, rest, newAcc);
  };
  iter(arr, []);
};


// HOW TO USE

const l = Array.from({length: 100}, (v,k) => k);
hAsyncMap(l, (elem => elem * 2), console.log );


