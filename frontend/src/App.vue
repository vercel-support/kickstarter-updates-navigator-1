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

      <div id="nav" class="px-6">
        <router-link :to="{ name: 'home'}" class="pa-3">
          <span class="mr-2">Home</span>
          <v-icon>mdi-home</v-icon>
        </router-link>

        <router-link :to="{ name: 'login'}" class="pa-3">
          <span class="mr-2">Login</span>
          <v-icon>mdi-login</v-icon>
        </router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#nav {
  a {
    font-weight: bold;
    text-decoration: none;
    color: #FFFFFF;

    &.router-link-exact-active {
      color: #05ce78;
    }
  }
}
</style>