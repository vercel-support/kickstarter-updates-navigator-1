<template>

  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar
              color="primary"
              dark
              flat
          >
            <v-toolbar-title>Kickstarter Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                  v-model="email"
                  :loading="isLoading"
                  label="Login"
                  prepend-icon="mdi-account"
                  type="text"
              />
              <v-text-field
                  v-model="password"
                  :loading="isLoading"
                  label="Password"
                  prepend-icon="mdi-lock"
                  type="password"
              />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    :loading="isLoading"
                    @click="onLogin">
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters} from "vuex";

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      email: "",
      password: "",
    }
  },
  computed: {
    ...mapGetters('account', [
      'isLoading',
    ]),
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