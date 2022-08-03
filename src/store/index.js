import Vue from 'vue'
import Vuex from 'vuex'
import Storage from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenObj: Storage.get('HEIMA_TOKEN') || {}
  },
  getters: {},
  mutations: {
    SET_TOKEN(state, payload) {
      state.tokenObj = payload
      Storage.set('HEIMA_TOKEN', payload)
    }
  },
  actions: {},
  modules: {}
})
