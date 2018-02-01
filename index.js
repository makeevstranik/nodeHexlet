import treeUnfolder from './001-treeUnfolder';

const tree = ['a', [['b', [['e'], ['f']]], ['c'], ['d', [['g'], ['j']]]]];
const res = treeUnfolder(tree);

console.log(res);

