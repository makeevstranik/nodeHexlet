/**
 * Created by Makeev Evgeny on 03.02.18.
 */
const myMap = (fn, node) => {
  if (node.type === 'directory') {
    return { ...fn(node), children: node.children.map(elem => myMap(fn, elem)) };
  }
  return fn(node);
};
export default myMap;

// HOW TO USE --------------------------------------------------------------
/*
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
const result = myMap(fnToMap, tree);
console.log(JSON.stringify(result));
*/