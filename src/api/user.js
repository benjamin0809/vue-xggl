import request from '@/utils/request'

export function register (userInfo) {
  const data = {
    username: userInfo.username,
    pwd: userInfo.password,
    mobile: userInfo.mobile,
    account: userInfo.account,
    email: userInfo.email
  }
  return request({
    url: '/User/insert',
    method: 'post',
    data
  })
}

export function checkAccount (account) {
  return request({
    url: 'User/checkAccount?account=' + account,
    method: 'get'
  })
}

export function getUserById (id) {
  return request({
    url: '/User/getUserById?id=' + id,
    method: 'get'
  })
}
