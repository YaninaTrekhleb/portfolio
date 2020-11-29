<template>
  <div id="app" class="min-h-full">
    <Header />
    <Profile />
    <Projects />
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Projects from './components/Projects.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Profile,
    Projects,
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
