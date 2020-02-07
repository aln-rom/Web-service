import API_URL from '../../boot/api'

const state = {
  users: null
}

const getters = {
  users: state => state.users
}

const actions = {
  getUser ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API_URL.get('auth/user', data)
        .then(responese => {
          commit('GET_USER', responese.data)
          resolve(responese)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_USER (state, payload) {
    state.users = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
