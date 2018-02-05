/**
 * Created by Makeev Evgeny on 05.02.18.
 */
const treeReducer = (f, tree, acc) => { // принимаем три аргумента, эта ф. будет использована callback далее
  const [, children] = tree; // разбиваем ноду
  const newAcc = f(acc, tree); // acc + 1 - применяем ф. (логика reduce)

  if (!children) {
    return newAcc; // конец рекурсии вернуть acc
  } // если есть ребенок - отправить его на новый цикл reduce
  return children.reduce((iAcc, n) => treeReducer(f, n, iAcc), newAcc); // здесь для каждого элемента n ребенка
  // применить ф. c аккумулятором iAcc - принимает newAcc. Эта функция в своем теле вызывает treeReducer
  // передавая туда f - прежднюю логику, текущий элемент ребенка, iAcc (newAcc).
};

// export default treeReducer;
// HOW TO USE------------------------------------------------------------------------
const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];

const result = treeReducer((acc, n) => acc + 1, tree, 0); // логика внутреннего reduce, дерево, acc
console.log(result);
