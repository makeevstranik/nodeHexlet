/**
 * Created by Makeev Evgeny on 13.03.18.
 */
/*
import _path from 'path';
import Tree from './024-fileSystemSimulator';
import { Dir, File } from './026-fileSystemSimulator-dirFileStatsNodeLib';
*/
const _path = require('path');
const Tree = require('./024-fileSystemSimulator');
const { Dir, File } = require('./026-fileSystemSimulator-dirFileStatsNodeLib');

const getPathParts = (path) => {
  if (path === '/') return [];
  return _path.resolve(path).split(_path.sep).slice(1);
};

const makePaths = (filePath, listPaths) => {
  if (filePath === '/') return listPaths.reverse();
  const { dir, base } = _path.parse(filePath);
  return makePaths(dir, [...listPaths, `${dir}/${base}`]);
};

// END

class FileSystem {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  // BEGIN (write your solution here)
  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) return null;
    return current.getMeta().getStats();
  }

  isFile(filepath) {
    const node = this.findNode(filepath);
    return node && node.getMeta().getStats().isFile();
  }

  touchSync(filepath) {
    const { dir, base } = _path.parse(filepath);
    const node = this.findNode(dir);
    if (!node || node.getMeta().getStats().isFile()) return false;
    return node.addChild(base, new File(base));
  }

  isDirectory(filepath) {
    const node = this.findNode(_path.resolve(filepath));
    return node && node.getMeta().getStats().isDirectory();
  }

  mkdirSync(filepath) {
    const { dir, base } = _path.parse(filepath);
    const node = this.findNode(dir);
    if (!node || node.getMeta().getStats().isFile()) return false;
    return node.addChild(base, new Dir(base));
  }

  mkdirpSync(filepath) {
    const pathsList = makePaths(filepath, []);
    if (!pathsList.every(elem => (!this.findNode(elem) ? true : this.isDirectory(elem)))) {
      return false;
    }
    pathsList.map(elem => this.findNode(elem) ? elem : this.mkdirSync(elem));
    return true;
  }

  readdirSync(filepath) {
    if (!this.isDirectory(filepath)) return false;
    const node = this.findNode(filepath);
    return [...node.children.keys()];
  }

  rmdirSync(filepath) {
    const dirlist = this.readdirSync(filepath);
    if (!dirlist || dirlist.length !== 0) return false;
    const { dir, base } = _path.parse(filepath);
    const parentnode = this.findNode(dir);
    return parentnode.removeChild(base);
  }

  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
// export default FileSystem;
module.exports = FileSystem;

// HOW TO WORK
/*
const file = new FileSystem();
file.mkdirSync('/myFolder');
console.log('FILE-dir', file);
console.log(file.isDirectory('/myFolder'));

file.touchSync('/myFolder/file.txt');
console.log('IsFile', file.isFile('/myFolder//////file.txt///'));
console.log(file.isFile('/notExistFolder/no-file.txt'));
//console.log(file);
console.log(file.statSync('/myFolder/file.txt'));

file.mkdirpSync('/myFolder/folder1/folder2/folder.t');

console.log('statSync-after mkdirp', file.statSync('/myFolder/folder1/folder2/folder.t'));
//console.log('WORK makePaths', makePaths('/etc/notExistFolder/no-file.txt', []));
//console.log('WORK makePaths', makePaths(_path.resolve('/myFolder/folder1/folder2/folder.t'), []));
*/