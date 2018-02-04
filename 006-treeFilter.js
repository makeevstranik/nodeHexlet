/**
 * Created by Makeev Evgeny on 04.02.18.
 */
const treeFilter = (f, tree) => {
  if (!f(tree)) {
    return null;
    // возвращаем null вместо эмента не удовлетворяющего предикату отбрасывая всю ветвь
  }
  const [name, children] = tree;
  if (!children) { // конечный лист
    return tree; // гарантированно удовлетворяет предикату
  } // условие для детей
  // map: для каждого элемента с приметить функцию treeFilter c аргументами (f, c) далее
  // возват map отфильтровать только не null
  return [name, children.map(c => treeFilter(f, c)).filter(v => v)];
};
//export default treeFilter;

// HOW TO USE
const tree = ['a', [
  ['B', [['e'], ['F']]],
  ['C'],
  ['d', [['G'], ['j']]],
]];

const result = JSON.stringify(treeFilter(([name]) => name === name.toLowerCase(), tree));
console.log(result);
// функция получает дерево и функцию предикат
// (возвращает boolean) для фильтрации, отбираем только имена строчными буквами
