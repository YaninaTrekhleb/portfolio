<template>
  <div id="profile">
   <h2 class="">{{ title }}</h2>
   <div class="avatar">
     <p>HERE WILL BE IMAGE</p>
     <img src="../images/avatar-image.jpg" alt="avatar-image">
   </div>
   <div class="about">

   </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data () {
      return {
      title: 'Profile Title'
      }
    }
  }
</script>

<style scoped>
</style>