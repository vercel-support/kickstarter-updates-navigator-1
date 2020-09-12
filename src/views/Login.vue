<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <h1>This is an about page hijacked as Login</h1>
        <v-form>
          <div>VERSION: {{ version }}</div>
          <v-text-field v-model="email">Email</v-text-field>
          <v-text-field v-model="password">Password</v-text-field>
          <v-btn @click="onLogin">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions} from "vuex";

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      email: process.env.VUE_APP_DEFAULT_LOGIN_EMAIL,
      password: process.env.VUE_APP_DEFAULT_LOGIN_PASSWORD,
      oauthToken: process.env.VUE_APP_DEFAULT_OAUTH_TOKEN,
      corsProxy: 'cors-anywhere.herokuapp.com/',
    }
  },
  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
    },
  },
  methods: {
    ...mapActions('account', ['login']),
    onLogin() {
      this.login({ email: this.email, password: this.password})
        .then(() => this.$router.push({ name: 'projects'}))
    },
  }
});
</script>