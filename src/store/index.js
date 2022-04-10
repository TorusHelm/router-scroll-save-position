import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: modules.posts(),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
