<template>
  <div 
    id="profile" 
  >
    <section
      class="flex flex-row justify-center items-center h-auto"
    >
      <div class="avatar mr-3.5">
        <img 
          class="rounded-full h-64 w-64"
          src="../images/avatar-image.jpg" 
          alt="avatar-image"
        >
      </div>
      <div class="about flex flex-col justify-center items-start">
        <h2 
          class="flex flex-row text-3xl text-center mb-2 font-normal text-black text-4xl"
        >
          {{ fullName }}
        </h2>
        <p 
          class="mb-3 text-lg"
        >
          <span>&#128187; </span>{{ position }}
        </p>
        <p
          class="mb-6 text-base"
        >
          <span>&#128205;</span>{{ location }}
        </p>
        <div class="skills mb-3">
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
          >
            html/css
          </span>
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
          >
            javascript
          </span>
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
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
      position: 'Junior Frontend Developer',
      location: 'Amsterdam, The Netherlands'
      }
    }
  }
</script>

<style scoped>
</style>