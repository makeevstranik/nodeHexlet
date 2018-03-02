/**
 * Created by Makeev Evgeny on 03.03.18.
 */
export default class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attr = attributes;
  }
  attrToString() {
    return Object.keys(this.attr)
      .map(elem => ` ${elem}="${this.attr[elem]}"`)
      .join('');
  }
}
