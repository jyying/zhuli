export default [
  {
    path: '/login',
    models: () => [import('../modules/login/index.m')],
    component: () => import('../modules/login/index.js')
  },
  {
    path: '/print',
    models: () => [import('../modules/print/index.m')],
    component: () => import('../modules/print/index.js')
  }
]