<template>
  <div id="header">
    <header class="fixed flex flex-row py-4 top-0 left-0 w-full bg-white bg-opacity-0.4">
      <nav class="flex w-full text-base">
        <router-link to="/" class="flex-1 hover:text-indigo-400">About</router-link> 
        <router-link to="/Projects" class="flex-1 hover:text-indigo-400">Projects</router-link> 
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  // data () {
  //   return {

  //   }
  // }
}
</script>

<style scoped>
</style>