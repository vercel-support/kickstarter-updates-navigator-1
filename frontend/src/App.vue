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
            exact
            :to="{ name: 'home'}">
          <span class="mr-2">Home</span>
          <v-icon>mdi-home</v-icon>
        </router-link>

        <router-link
            class="pa-3"
            exact
            :to="{ name: 'login'}">
          <span class="mr-2">Login</span>
          <v-icon>mdi-login</v-icon>
        </router-link>
      </div>

      <div class="nav px-6" v-else>
        <router-link
            class="pa-3"
            exact
            :to="{ name: 'projects'}">
          <span class="mr-2">Home</span>
          <v-icon>mdi-home</v-icon>
        </router-link>

        <v-btn
            text
            link
            class="pa-3"
            @click="logout()">
          <span class="mr-2 logout-btn">Logout</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>

      <v-btn
          class="pa-3"
          @click="loginToggle()">
        <span class="mr-2 logout-btn">Tgll</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  page: {
    // if no subcomponents specify a page.title, this title will be used
    title: 'Kickstarter Updates Navigator',
  },
  data() {
    return {
      loggedIn: true,
    }
  },
  methods: {
    loginToggle() {
      this.loggedIn = !this.loggedIn;
    },
    logout() {
      this.loggedIn = false;
      this.$router.push({ name: 'home'});
    }
  }
});
</script>

<style lang="scss">
.nav {
  a {
    font-weight: bold;
    text-decoration: none;
    color: #FFFFFF;

    &.router-link-exact-active {
      color: #05ce78;
    }
  }
}
.logout-btn {
  font-size: 16px;
  font-weight: bold;
  text-transform: none;
}
</style>