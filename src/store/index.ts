import Vue from 'vue'
import Vuex from 'vuex'

import { account } from './account';
import { projects } from './projects';

Vue.use(Vuex)

const debug = process.env.VUE_APP_ENV === 'development';

export default new Vuex.Store({
  modules: {
    account,
    projects,
  },
  strict: debug,
})
