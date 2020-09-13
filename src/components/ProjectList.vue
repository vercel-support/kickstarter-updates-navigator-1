<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <v-row align="center" justify="space-between">
          <v-col>
            <h1>Projects</h1>
          </v-col>
          <v-spacer />
          <v-col cols="3">
            <v-text-field
                label="Filter"
                v-model="filter"
                hide-details
                dense
            />
          </v-col>
          <v-col cols="2">
            <v-select
                label="Sorter"
                v-model="sorter"
                :items="sorterItems"
                item-text="label"
                hide-details
                dense
                return-object
            />
          </v-col>
          <v-col cols="1">
            <v-btn color="primary" @click="refresh()"><v-icon>mdi-restart</v-icon></v-btn>
          </v-col>
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
                target="_blank"
            >
              <v-list-item-avatar>
                <v-img :src="project.photo.small"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ project.name }}
                  <v-icon color="primary" :size="20" v-if="project.is_starred">mdi-star</v-icon>
                  <v-icon color="primary" :size="20" v-if="project.is_backing">mdi-kickstarter</v-icon>
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
  data() {
    return {
      filter: "",
      sorter: { label: 'Last Updated', expr: (a: any, b: any) => b.updated_at - a.updated_at },
      sorterItems: [
        { label: 'Last Updated', expr: (a: any,b: any) => b.updated_at - a.updated_at },
        { label: 'Last Created', expr: (a: any, b: any) => b.created_at - a.created_at },
        { label: 'Last Deadline', expr: (a: any, b: any) => b.deadline - a.deadline },
      ],
    }
  },
  computed: {
    ...mapGetters('projects', [
      'isLoading',
      'isAvailable',
    ]),
    ...mapGetters('projects', {
      availableProjects: 'getAvailableCollection',
    }),
    projects(): any[] {
      return Object.assign([], this.availableProjects)
          .filter((project: any) => {
            return project.name.toLowerCase().includes(this.filter.toLowerCase())
          })
          .sort(this.sorter.expr);
    },
  },
  mounted() {
    this.refresh();
  },
  methods: {
    ...mapActions('projects', [
      'list',
    ]),
    debug() {
      console.log(this.sorter);
    },
    refresh() {
      this.list()
          .catch((e: Error) => {
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