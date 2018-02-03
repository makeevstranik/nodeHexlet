import treeUnfolder from './001-treeUnfolder';
import myMap from './004-treeMapper';

const tree = ['a', [['b', [['e'], ['f']]], ['c'], ['d', [['g'], ['j']]]]];
const functionForMap = (([name]) => [name.toUpperCase()]);
console.log(treeUnfolder(myMap(functionForMap, tree)));

