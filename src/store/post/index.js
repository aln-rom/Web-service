import API_URL from '../../boot/api'

const state = {
  posts: null
}

const getters = {
  posts: state => state.posts
}

const actions = {
  getPosts ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API_URL.get('posts', data)
        .then(response => {
          commit('GET_POSTS', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const mutations = {
  GET_POSTS (state, payload) {
    state.posts = Object.values(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
