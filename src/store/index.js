import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    i18nReady: false
  },
  mutations: {
    i18nReady (state) {
      state.i18nReady = true
    }
  },
  actions: {

  }
})
