/**
 * Created by Makeev Evgeny on 14.03.18.
 */
import Tree from './024-fileSystemSimulator';

class Stats {
  constructor(isFl, isDr) {
    this.isFl = isFl;
    this.isDr = isDr;
  }
  isFile() {
    return this.isFl;
  }

  isDirectory() {
    return this.isDr;
  }
}

class Node {
  constructor(name, isFl, isDr) {
    this.name = name;
    this.stats = new Stats(isFl, isDr);
  }

  getStats() {
    return this.stats;
  }

  getName() {
    return this.name;
  }
}

class Dir extends Node {
  constructor(name) {
    super(name, false, true);
  }

  isFile() {
    return false;
  }

  isDirectory() {
    return true;
  }
}

class File extends Node {
  constructor(name) {
    super(name, true, false);
  }

  isFile() {
    return true;
  }

  isDirectory() {
    return false;
  }
}

export { Dir, File };
