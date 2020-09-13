import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

import {account, AccountState} from './account';
import { projects } from './projects';

Vue.use(Vuex)

const debug = process.env.VUE_APP_ENV === 'development';

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: (state: { account: AccountState }) => ({
    account: state.account,
  }),
});

export default new Vuex.Store({
  modules: {
    account,
    projects,
  },
  strict: debug,
  plugins: [vuexSession.plugin],
})
