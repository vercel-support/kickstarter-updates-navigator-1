<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <h1>This is an about page hijacked as Login</h1>
        <v-form>
          <div>VERSION: {{ version }}</div>
          <v-text-field v-model="email">Email</v-text-field>
          <v-text-field v-model="password">Password</v-text-field>
          <v-btn @click="getAllProjects()">Test</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

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
    authenticate() {
      const xhr = new XMLHttpRequest();
      const url = 'https://cors-anywhere.herokuapp.com/api.kickstarter.com/xauth/access_token?client_id=2II5GGBZLOOZAA5XBU1U0Y44BU57Q58L8KOGM7H0E0YFHP3KTG';

      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = evt => {
        console.log(evt);
      };
      const body = {
        email: this.email,
        password: this.password
      };
      xhr.send(JSON.stringify(body));
    },
    getAllProjects() {
      fetch(`https://${this.corsProxy}api.kickstarter.com/v1/users/self/projects/starred?oauth_token=${this.oauthToken}&signature=1599431394.4e0075e7a342fecea23a2d7275167cb115fa0d64`)
          .then(response => response.json())
          .then(data => console.log(data));
    },
  }
});
</script>