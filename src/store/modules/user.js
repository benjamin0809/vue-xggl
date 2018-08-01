import { loginByAccount } from '@/api/login'
import { register } from '@/api/user'

const user = {
  state: {
    user: '',
    token: '',
    name: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    loginByAccount ({ commit }, userInfo) {
      const account = userInfo.account.trim()
      return new Promise((resolve, reject) => {
        loginByAccount(account, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', response.token)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    register ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        register(userInfo).then(response => {
          const data = response.data
          commit('SET_TOKEN', response.token)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
