<template>
  <div>
    <ProjectList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectList from '@/components/ProjectList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Projects',
  components: {
    ProjectList,
  },
});
</script>
