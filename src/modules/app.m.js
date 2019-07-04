import { routerRedux } from 'dva/router';

export default {
  namespace: 'app',
  state: {
    name: 'name',
  },
  effects: {
    * goPage({ payload }, { put }) {
      const { pathname, type = 'push' } = payload
      yield put(routerRedux[type]({
        pathname: pathname,
      }))
    },
  }
}