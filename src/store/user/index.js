import API_URL from '../../boot/api'

const state = {
  user: null
}

const getters = {
  user: state => state.user
}

const actions = {
  getUser ({ commit }, data) {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('user-token')) {
        API_URL.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user-token')
      }
      API_URL.get('auth/user', data)
        .then(response => {
          commit('GET_USER', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  updateUser ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API_URL.put('users/update', data)
        .then((response) => {
          API_URL.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user-token')
          console.log(response)
          resolve(response)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_USER (state, payload) {
    state.user = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
