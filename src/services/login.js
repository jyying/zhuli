import request from '../utils/request'

export function login(data) {
  return request({
    url: 'app/login',
    method: 'POST',
    data,
  })
}