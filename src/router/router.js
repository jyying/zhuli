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
  }
]