<template>
  <v-app>
    <notifications
        position="bottom right"
        :max="3" />
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Kickstarter Updates Navigator</h1>
      </div>

      <v-spacer></v-spacer>

      <div class="nav px-6" v-if="!loggedIn">
        <router-link
            class="pa-3"
            :to="{ name: 'home'}">
          <span class="mr-2">Home</span>
          <v-icon>mdi-home</v-icon>
        </router-link>

        <router-link
            class="pa-3"
            :to="{ name: 'login'}">
          <span class="mr-2">Login</span>
          <v-icon>mdi-login</v-icon>
        </router-link>
      </div>

      <div class="nav px-6" v-else>
        <router-link
            class="pa-3"
            :to="{ name: 'projects'}">
          <span class="mr-2">Projects</span>
          <v-icon>mdi-home</v-icon>
        </router-link>

        <a
            class="pa-3"
            @click="onLogout">
          <span class="mr-2 logout-btn">Logout</span>
          <v-icon>mdi-logout</v-icon>
        </a>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters} from "vuex";

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapGetters('account', {
      loggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    ...mapActions('account', [
      'logout',
    ]),
    onLogout() {
      this.logout()
        .then(() => this.$router.push({ name: 'home'}));
    },
  }
});
</script>

<style lang="scss">
.nav {
  a {
    font-weight: bold;
    text-decoration: none;
    color: #FFFFFF;

    &.router-link-exact-active > span {
      color: #05ce78;
      text-decoration: overline;
    }
  }
}
.logout-btn {
  font-size: 16px;
  font-weight: bold;
  text-transform: none;
}
</style>