<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <v-row justify="space-between">
          <h1>Kickstarters</h1>
          <v-btn @click="refresh()">Refresh</v-btn>
        </v-row>
        <v-row>
          <v-list
              v-if="isAvailable"
              two-line
          >
            <v-list-item
                v-for="(project, i) in projects"
                :key="i"
                :href="`${project.urls.web.project}/posts`"
            >
              <v-list-item-avatar>
                <v-img :src="project.photo.small"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ project.name }}
                  <v-icon :size="20" v-if="project.is_starred">mdi-star</v-icon>
                  <v-icon :size="20" v-if="project.is_backing">mdi-kickstarter</v-icon>
                </v-list-item-title>
                <v-list-item-subtitle v-html="project.blurb"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>{{ project.updated_at | moment('calendar')}}</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters} from "vuex";

export default Vue.extend({
  name: 'ProjectList',
  computed: {
    ...mapGetters('projects', [
      'isLoading',
      'isAvailable',
    ]),
    ...mapGetters('projects', {
      projects: 'getAvailableCollection',
    }),
  },
  mounted() {
    this.refresh();
  },
  methods: {
    ...mapActions('projects', [
      'list',
    ]),
    refresh() {
      this.list()
          .catch((e) => {
            if (!this.isAvailable) {
              console.log(e);
              this.$notify({
                type: 'error',
                title: "An error occurred",
                text: "Try again later",
              });
            }
          });
    }
  },
});
</script>

<style scoped>

</style>