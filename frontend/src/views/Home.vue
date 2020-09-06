<template>
  <div class="home">
    <ProjectList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectList from '@/components/ProjectList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    ProjectList,
  },
});
</script>
