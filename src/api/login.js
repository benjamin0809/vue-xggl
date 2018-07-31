import request from '@/utils/request'

export function loginByAccount (username, password) {
  const data = {
    account: username,
    pwd: password
  }
  return request({
    url: 'User/login',
    method: 'post',
    data
  })
}
