import Vuex from 'vuex'
import Vue from 'vue'
import Cars from './modules/cars'
import Animals from './modules/animals'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      Cars,
      Animals
  }
});