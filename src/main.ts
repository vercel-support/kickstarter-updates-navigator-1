import Vue from 'vue'
import VueMoment from 'vue-moment';
import Notifications from 'vue-notification';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import { makeServer } from "./server"

Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") {
  makeServer()
}

Vue.use(VueMoment);
Vue.use(Notifications);

(async function () {
  /* eslint-disable no-new, no-unused-vars */
  router.beforeEach((to, from, next) => {
    const publicPages = [
      'home',
      'login',
    ];
    const authRequired = !to.name || !publicPages.includes(to.name);
    const loggedIn = store.getters["account/isLoggedIn"];

    if (!loggedIn && authRequired) {
      next(false);
      router.push({name: 'home'})
      return;
    }

    if (loggedIn && !authRequired) {
      next(false);
      router.push({name: 'projects'})
      return;
    }
    next();
  });

  new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
  }).$mount('#app')
}());