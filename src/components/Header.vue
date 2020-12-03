<template>
  <div id="header">
    <header class="fixed flex flex-row justify-center pt-4 top-0 left-0 w-full">
      <nav class="flex w-full">
        <router-link to="/" class="flex-1 hover:text-blue-50">About</router-link> 
        <router-link to="/Projects" class="flex-1 hover:text-blue-50">Projects</router-link> 
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