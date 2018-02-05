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
const treeReduce = (fn, tree, acc) => {
  const newAcc = fn(acc, tree);
  if (!tree.children) return newAcc;
  const fnToReduce = (innerAcc, elem) => treeReduce(fn, elem, innerAcc);
  console.log('--->', tree.children);
  console.log('acc***', newAcc);
  return tree.children.reduce(fnToReduce, newAcc);
};

const findFilesByName = (tree, strToFind) => {
  const predicate = (acc, tree) => {
    if (tree.type === 'file' && tree.name.includes(strToFind)) return [...acc, tree.name];
    return acc;
  };
  return treeReduce(predicate, tree, []);
};

console.log(JSON.stringify(tree));
const result = findFilesByName(tree, 'ol');
console.log('RESULT    ', result);
/*
findFilesByName(tree, 'co');
// => ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
 */