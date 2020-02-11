import API_URL from '../../boot/api'

const state = {
  token: localStorage.getItem('user-token') || ''
}

const getters = {
}

const mutations = {
  AUTH_SUCCESS (state, data) {
    state.token = data.token
    state.message = data.message
  },
  AUTH_LOGOUT (state) {
    state.token = ''
  }
}

const actions = {
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API_URL.post('auth/login', data)
        .then((response) => {
          const token = response.data.token
          commit('AUTH_SUCCESS', token)
          localStorage.setItem('user-token', token)
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
  },
  registerVK ({ commit }, data) {
    return new Promise((resolve, reject) => {
      const href = location.href
      const index = href.split('=')
      const url = index.splice(1, 2)
      console.log(url[0].slice(0, -2))
      API_URL.get(`auth/vk/callback?code=` + url[0].slice(0, -2), data)
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
  },
  registerGoogle ({ commit }, data) {
    return new Promise((resolve, reject) => {
      const href = location.href
      const index = href.split('=')
      const url = index.splice(1, 2)
      console.log(url[0].slice(0, -2))
      API_URL.get(`auth/google/callback?code=` + url[0].slice(0, -2), data)
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
