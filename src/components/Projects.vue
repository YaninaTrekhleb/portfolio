<template>
  <div id="projects">
    <section>
      <h3>ALL PROJECTS</h3>
      <div v-for="project in projects" :key="project.name">
        <Project v-bind:project="project"/>
      </div>
    </section>
  </div>
</template>

<script>
import {projects} from '../database/projects'
import Project from './Project.vue'

export default {
  name: 'Projects',
  data () {
    return {
      projects: projects
    }
  },
  components: {
    Project
  }
}
</script>

<style scoped>

</style>