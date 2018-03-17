/**
 * Created by Makeev Evgeny on 12.03.18.
 */
class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);
    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)
  hasChildren() {
    return Boolean(this.children.size);
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  getDeepChild(keys) {
    if (keys.length === 0) return undefined;
    const key = keys[0];
    const child = this.getChild(key) || undefined;
    if (keys.length === 1) return child;
    return child ? child.getDeepChild(keys.slice(1)) : undefined;
  }

  getChilden() {
    return [...this.children.values()];
  }
  // END
}

module.exports = Tree;
// export default Tree;
