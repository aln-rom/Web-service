import authModule from './auth'

export default {
  namespaced: true,
  modules: {
    products: {
      ...authModule
    }
  }
}
