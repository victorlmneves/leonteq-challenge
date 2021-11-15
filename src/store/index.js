import Vue from 'vue'
import Vuex from 'vuex'

import books from './modules/books'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    books
  }
})

export default store
