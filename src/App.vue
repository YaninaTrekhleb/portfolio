<template>
  <div id="app" class="min-h-full">
    <Header />
    <Profile />
    <Project />
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Project from './components/Project.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Profile,
    Project,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
