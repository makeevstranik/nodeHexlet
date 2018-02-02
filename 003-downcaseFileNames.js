/**
 * Created by Hexlet
 */
const downcaseFileNames = (node) => {
  if (node.type === 'directory') {
    return { ...node, children: node.children.map(downcaseFileNames) };
  }
  return { ...node, name: node.name.toLowerCase() };
};
export default downcaseFileNames;

/*
const treeToCheck = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {},
          name: 'NgiNx',
          type: 'directory',
        },
        {
          children: [{ meta: {}, name: 'config.json', type: 'file' }],
          meta: {},
          name: 'CONSUL',
          type: 'directory',
        },
      ],
      meta: {},
      name: 'eTc',
      type: 'directory',
    },
    { meta: {}, name: 'hosts', type: 'file' },
  ],
  meta: {},
  name: '/',
  type: 'directory',
};
console.log(downcaseFileNames(treeToCheck));
*/
