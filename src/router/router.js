export default [
  {
    path: '/login',
    models: () => [import('../modules/login/index.m')],
    component: () => import('../modules/login/index.js')
  },
  {
    path: '/home',
    models: () => [import('../modules/home/index.m')],
    component: () => import('../modules/home/index.js')
  },
  {
    path: '/wallet',
    models: () => [import('../modules/wallet/index.m')],
    component: () => import('../modules/wallet/index.js')
  },
  {
    path: '/withdrawCash',
    models: () => [import('../modules/withdrawCash/index.m')],
    component: () => import('../modules/withdrawCash/index.js')
  },
  {
    path: '/task',
    models: () => [import('../modules/task/index.m')],
    component: () => import('../modules/task/index.js')
  }
]