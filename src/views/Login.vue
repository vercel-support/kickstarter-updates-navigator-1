<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <h1>Enter your Kickstarter Login</h1>
        <v-form>
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
      email: "",
      password: "",
    }
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