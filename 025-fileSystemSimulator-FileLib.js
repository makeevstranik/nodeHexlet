/**
 * Created by Makeev Evgeny on 13.03.18.
 */
import _path from 'path';
import Tree from './024-fileSystemSimulator';
import { Dir, File } from './026-fileSystemSimulator-dirFileStatsNodeLib';

const getPathParts = (path) => {
  if (path === '/') return [];
  return path.split(_path.sep).slice(1);
};
const dividePath = (wholePath) => {
  const resPath = _path.resolve(wholePath);
  return [_path.dirname(resPath), _path.basename(resPath)];
};
// END

class FileSystem {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  // BEGIN (write your solution here)
  statSync(filepath) {
    const current = this.findNode(filepath);
    return current.getMeta().getStats();
  }

  isFile(path) {
    const node = this.findNode(_path.resolve(path));
    return node && node.meta.type === 'file';
  }

  touchSync(path) {
    const [filePath, fileName] = dividePath(path);
    const node = this.findNode(filePath);
    return node.addChild(fileName, new File(fileName));
  }

  isDirectory(path) {
    const node = this.findNode(_path.resolve(path));
    return node && node.meta.type === 'dir';
  }

  mkdirSync(path) {
    const [dirPath, dirName] = dividePath(path);
    const node = this.findNode(dirPath);
    return node.addChild(dirName, new Dir(dirName));
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
export default FileSystem;

const file = new FileSystem();
file.mkdirSync('/myFolder');
console.log(file.isDirectory('/myFolder'));
file.touchSync('/myFolder/file.txt');
console.log(file.isFile('/myFolder//////file.txt///'));
console.log(file.isFile('/notExistFolder/no-file.txt'));
console.log(file);
console.log(file.statSync('/myFolder/file.txt').isFile());
