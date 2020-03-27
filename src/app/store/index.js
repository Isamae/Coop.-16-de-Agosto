import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    carruselVisible: 0,
    navVisible:0,

  },
  mutations: {
    setCarruselVisible(state,carruselVisible){
      state.carruselVisible = carruselVisible
    },
    setNavVisible(state,navVisible){
      state.navVisible = navVisible
    },
  },
  actions: {
  },
  modules: {
  }
})
