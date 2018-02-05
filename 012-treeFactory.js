/**
 * Created by Makeev Evgeny on 05.02.18.
 */
class Directory {
  constructor(name = 'no-name-directory', children = null, meta = {}) {
    this.children = children;
    this.meta = meta;
    this.name = name;
    this.type = 'directory';
  }
}

class File {
  constructor(name = 'no-name-file', size = {}, meta = {}) {
    this.meta = meta;
    this.name = name;
    this.type = 'file';
    this.size = size;
  }
}

const mkdir = (name, children, meta) => new Directory(name, children,  meta);
const mkfile = (name, size, meta) => new File(name, size, meta);

export { mkfile, mkdir};

// HOW TO USE ----------------------------------------------------------------
/*
console.log(mkdir([2, 3, 4], 'ffff'));
const a = mkfile('myfile', {buf: 23});
console.log(a);
*/