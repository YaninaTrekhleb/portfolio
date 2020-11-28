<template>
  <div 
    id="profile" 
  >
    <section
      class="flex flex-row justify-center items-center "
    >
      <div class="avatar">
        <img 
          class="rounded-full h-72 w-72"
          src="../images/avatar-image.jpg" 
          alt="avatar-image"
        >
      </div>
      <div class="about flex flex-col justify-center items-start">
        <h2 
          class="flex flex-row text-3xl text-center mb-1 leading-tight font-normal text-black"
        >
          {{ fullName }}
        </h2>
        <p>{{ position }}</p>
        <p>&#128205;{{ location }}</p>
        <div class="skills">
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal mr-2 mb-2 last:mr-0"
          >
            html/css
          </span>
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal mr-2 mb-2 last:mr-0"
          >
            javascript
          </span>
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal mr-2 mb-2 last:mr-0"
          >
            vue.js
          </span>
        </div>
        <div
          class="contacts"
        >

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data () {
      return {
      fullName: 'Yanina Trekhleb',
      position: 'Junior Front-end Developer',
      location: 'Amsterdam, The Netherlands'
      }
    }
  }
</script>

<style scoped>
</style>