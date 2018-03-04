/**
 * Created by Makeev Evgeny on 04.03.18.
 */
/* Пример полной имитации класса с наследованием, все функции-методы  вынесены за
пределы псевдоклассов (функций) дабы не плодить лишние lixical invaronments
*/

function attrToString() {
  return Object.keys(this.attr)
    .map(elem => ` ${elem}="${this.attr[elem]}"`)
    .join('');
}

function pairedToString() {
  return (`<${this.name}${this.attrToString()}>${this.body}${this.children
    .map(elem => elem.toString())
    .join('')}</${this.name}>`);
}

function singleToString() {
  return `<${this.name}${this.attrToString()}>`;
}

function Node(name = 'noname', attributes = []) {
  this.name = name;
  this.attr = attributes;
  this.attrToString = attrToString;
}
function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = pairedToString;
}

function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = singleToString;
}

const singleTags = new Set(['hr', 'br', 'img']);
const buildNode = (name, attr, body, children) => {
  return singleTags.has(name) ? new SingleTag(name, attr) :
    new PairedTag(name, attr, body, children);
};

// HOW TO USE
const ast = buildNode('html', {}, '', [
  buildNode('head', {}, '', [
    buildNode('title', {}, 'hello, hexlet!'),
  ]),
  buildNode('body', {}, '', [
    buildNode('h1', { class: 'header', id: 'first' }, 'html builder example'),
    buildNode('div', {}, '', [
      buildNode('span', {}, 'span text'),
      buildNode('hr'),
    ]),
  ]),
]);

// console.log(ast);
console.log(ast.toString());