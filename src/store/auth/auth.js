import API_URL from '../../boot/api'

const state = {
  token: localStorage.getItem('user-token') || ''
}

const getters = {
  users: state => state.users
}

const mutations = {
  AUTH_SUCCESS (state, data) {
    state.token = data.token
    state.user = data.user
  },
  AUTH_LOGOUT (state) {
    state.token = ''
  },
  GET_USERS (state, payload) {
    state.users = Object.values(payload)
  }
}

const actions = {
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API_URL.post('auth/login', data)
        .then((response) => {
          const token = response.data.token
          const user = response.data.user
          commit('AUTH_SUCCESS', token)
          commit('AUTH_SUCCESS', user)
          localStorage.setItem('user-token', token)
          localStorage.setItem('user', user)
          API_URL.defaults.headers.common['Authorization'] = 'Bearer ' + token
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  logout ({ commit }, data) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('user-token')
      API_URL.defaults.headers.common['Authorization'] = 'Bearer ' + token
      API_URL.get('auth/logout', data)
        .then(response => {
          commit('AUTH_LOGOUT')
          delete API_URL.defaults.headers.common['Authorization']
          localStorage.removeItem('user-token')
          localStorage.removeItem('user')
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          API_URL.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user-token')
          reject(error)
          console.log(API_URL.defaults.headers.common['Authorization'])
        })
    })
  },
  updateAuth () {
    const token = localStorage.getItem('user-token')
    if (token) {
      API_URL.defaults.headers.common['Authorization'] = 'Bearer' + token
    }
  },
  register ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API_URL.post(`auth/register`, data)
        .then((response) => {
          const token = response.data.token
          localStorage.setItem('user-token', token)
          commit('AUTH_SUCCESS', token)
          API_URL.defaults.headers.common['Authorization'] = 'Bearer ' + token
          console.log(response.data)
          resolve(response)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
