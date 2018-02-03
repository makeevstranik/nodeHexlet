/**
 * Created by Makeev Evgeny on 03.02.18.
 */
// В коде используются два разных map. Один самописный, другой на массиве.
const myMap = (f, tree) => { // получили functionForMap  и дерево для обработки
  const [, children] = tree; // положили ребенка из tree в children
  const [newName] = f(tree); // дестр. присв. результата работы функ -  newName - string
  if (!children) { // here we cut off a recursion - element has no children
    return [newName]; // string is returned in array - in oder to keep a tree structure
  }
  return [newName, children.map(elem => myMap(f, elem))]; // here we construct the new tree having
  // the same structure. We map children with build function using myMap as callback
};
export default myMap;
// HOW TO USE ============================================================================

/*
const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['g'], ['j']]],
]];


// СТАРТУЕМ ЗДЕСЬ
const functionForMap = (([name]) => [name.toUpperCase()]);
console.log(myMap(functionForMap, tree));

// JSON.stringify(myMap(([name]) => [name.toLowerCase()], tree));
/*
 функция functionForMap, которая
 передается в 'myMap', всегда принимает только строку из первого элемента массива
 (одновременно идет проверка на iterable) при помощи деструктивного
 присваивания в аргументе [name]= . А возвращает опять таки заготовку для диструктивного присваивания
 результата в дольнейiем коде - гарантирована распаковка только первого элемента в строку.
 Эта функция определяет логику маппинга.
 JSON.stringify() - аналог console.log только с пропечаткой всех вложенных узлов но в phpStorm не работает
 */
