/**
 * Created by Makeev Evgeny on 03.02.18.
 */
const myMap = (node, fn) => {
 // console.log(JSON.stringify(node));
  console.log('node==', node);
  console.log('--->', node.children);
  console.log('fn---', fn);
  if (node.type === 'directory') {
    return { ...node, children: node.children.map(elem => myMap(elem, fn)) };
  }
  return fn(node);
};
// HOW TO USE --------------------------------------------------------------
const tree = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {},
          name: 'NGINX',
          type: 'directory',
        },
        {
          children: [{ meta: {}, name: 'CONFIG.JSON', type: 'file' }],
          meta: {},
          name: 'CONSUL',
          type: 'directory',
        },
      ],
      meta: {},
      name: 'ETC',
      type: 'directory',
    },
    { meta: {}, name: 'HOSTS', type: 'file' },
  ],
  meta: {},
  name: '/',
  type: 'directory',
};
const fnToMap = node => ({ ...node, name: node.name.toUpperCase() });
const result = myMap(tree, fnToMap);
//const result = myMap(n => ({ ...n, name: n.name.toUpperCase() }), tree);
console.log(JSON.stringify(result));
