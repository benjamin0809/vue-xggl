import axios from 'axios'

const service = axios.create({
// baseURL: 'http://localhost:8083/xggl/Api/v1/', // api的base_url
  baseURL: 'http://www.popochiu.com:8888/xggl/Api/v1/', // api的base_url
  timeout: 5000 // request timeout
})

export default service

service.interceptors.response.use(
  response => {
    console.log(response.data)
    if (response.status === 200) {
      if (response.data.errcode === 0) {
        return Promise.resolve(response.data)
      } else {
        alert(response.data.message)
        return Promise.reject(response.data)
      }
    }
  }, error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
