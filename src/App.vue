<template>
  <div id="app">
    <h1></h1>
    <Profile />
  </div>
</template>

<script>
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    Profile
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
