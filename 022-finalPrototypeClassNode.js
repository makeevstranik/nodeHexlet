/**
 * Created by Makeev Evgeny on 12.03.18.
 */
function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce((acc, key) =>
    `${acc} ${key}="${this.attributes[key]}"`, '');
};
function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);
SingleTag.prototype.constructor = SingleTag;

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};

function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype = Object.create(Node.prototype);
PairedTag.prototype.constructor = PairedTag;

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};

