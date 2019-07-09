import { login } from '../../services/login'

export default {
  namespace: 'login',
  state: [],
  effects: {
    * login({ payload }, { call }) {
      return yield call(login, payload)
    }
  }
}