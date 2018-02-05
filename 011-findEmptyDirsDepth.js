/**
 * Created by Makeev Evgeny on 05.02.18.
 */
import { tree } from './008-treeSample';

const findEmptyDirsDepth = (root, depth = 1) => { // принимаем дерево и глубину поиска(по умол 1)
  const iter = (n, currentDepth, acc) => {
    if (currentDepth > depth) {
      return acc; // не накапливать аккум. если превышена глубина поиска
    }
    if (n.type === 'directory' && n.children.length === 0) { // детей нет папка пустая
      return [...acc, n.name]; // добавить имя в акк.
    }
    if (n.type === 'file') return acc;
    return n.children.reduce((cAcc, nn) => iter(nn, currentDepth + 1, cAcc), acc);
  };

  return iter(root, 1, []); // во внутренний итератор - дерево, старт для акк. глубины, асс путей
};

// HOW TO USE ---------------------------------------------------------------------
const dirs = findEmptyDirsDepth(tree, 3); // найти
console.log('empty folders----->', dirs);
