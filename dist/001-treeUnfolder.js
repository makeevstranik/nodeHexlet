'use strict';Object.defineProperty(exports, "__esModule", { value: true });var treeUnfolder = function treeUnfolder(anyTree) {
  var fn = function fn(acc, value) {return (
      value instanceof Array ? acc + treeUnfolder(value) : acc + value);};
  return anyTree.reduce(fn, '');
};exports.default =
treeUnfolder;
/*
              const tree = ['a', [['b', [['e'], ['f']]], ['c'], ['d', [['g'], ['j']]]]];
              const res = treeUnfolder(tree);
              console.log('---->', res);
              */
//# sourceMappingURL=001-treeUnfolder.js.map