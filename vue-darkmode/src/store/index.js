import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //estado inicial do Vuex
  state: {
    darkMode: false,
  },
  mutations: {
    //metodo para alterar o modo atual de template
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {},
  modules: {},
});
