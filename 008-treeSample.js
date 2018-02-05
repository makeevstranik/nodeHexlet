/**
 * Created by Makeev Evgeny on 04.02.18.
 */
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

const treeArr = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['g'], ['j']]],
]];

export { tree, treeArr };
