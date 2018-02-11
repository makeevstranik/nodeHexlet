/**
 * Created by Makeev Evgeny on 05.02.18.
 */
import { mkdir, mkfile } from './012-treeFactory';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);
const treeReduce = (fn, tree, acc, index = 1, arr = []) => {
  if (fn(tree)) { // нет
    acc = { accum: [...acc.accum, acc.path.join('/').slice(1) + '/' + tree.name], path: acc.path };
  }
  if (index === arr.length - 1 && tree.type === 'file')console.log('Delete from path --', acc.path.pop()); // псоледний из детей удаляет папку
  if (!tree.children) { // нет
  // console.log('EXIT FROM', tree.type, '***', tree.name);
    return acc;
  }
  const fnToReduce = (innerAcc, elem, index, arr) => treeReduce(fn, elem, innerAcc, index, arr);
  acc.path.push(tree.name); //
  // console.log('TREE===>', tree.type, '---', tree.name);
  //  console.log('children--->', tree.children);
  // console.log('acc***', acc);
  return tree.children.reduce(fnToReduce, acc); // отдали детей и акк  на редус - пошла папка etc
};
const findFilesByName = (tree, strToFind) => {
  const fnPredicate = tree => tree.type === 'file' && tree.name.includes(strToFind);
  return treeReduce(fnPredicate, tree, { accum: [], path: [] }).accum;
};

// console.log(JSON.stringify(tree));
const result = findFilesByName(tree, 'co');
// console.log('RESULT    ', result);
/*
findFilesByName(tree, 'co');
// => ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
 */
