<template>
  <v-container>
    <v-list
        two-line
    >
      <v-list-item
          v-for="(project, i) in projects"
          :key="i"
      >
        <v-list-item-avatar>
          <v-img :src="project.photo.small"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="project.name"></v-list-item-title>
          <v-list-item-subtitle v-html="project.blurb"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectList',
  data() {
    return {
      projects: [],
    }
  },
  created() {
    fetch("/api/projects")
        .then((res) => res.json())
        .then((json) => {
          this.projects = json.projects
        })
  },
});
</script>

<style scoped>

</style>