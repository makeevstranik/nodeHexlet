'use strict';var _treeUnfolder = require('./001-treeUnfolder');var _treeUnfolder2 = _interopRequireDefault(_treeUnfolder);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tree = ['a', [['b', [['e'], ['f']]], ['c'], ['d', [['g'], ['j']]]]];
var res = (0, _treeUnfolder2.default)(tree);

console.log(res);
//# sourceMappingURL=index.js.map