<template>
  <div id="header">
    <header class="fixed flex flex-row py-4 top-0 left-0 w-full bg-white bg-opacity-90">
      <nav class="flex justify-center w-full text-base">
        <router-link to="/" class="pl-3 pr-3 hover:text-indigo-400">About</router-link> 
        <router-link to="/Projects" class="pl-3 pr-3 hover:text-indigo-400">Projects</router-link> 
        <router-link to="/Certificates" class="pl-3 pr-3 hover:text-indigo-400">Certificates</router-link> 
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
</style>