import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8083/xggl/Api/v1/', // api的base_url
  timeout: 5000 // request timeout
})

export default service

service.interceptors.response.use(
  response => {
    console.log(response.data)
    if (response.status === 200) {
      if (response.data.errcode === 0) {
        return Promise.resolve(response.data.data)
      } else {
        alert(response.data.message)
      }
    }
  }, error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
