<template>
  <div 
    id="profile" 
  >
    <section
      class="flex flex-col justify-center items-center h-auto w-auto sm:flex-row"
    >
      <div class="avatar mr-6 mb-6 sm:mb-0">
        <img 
          class="rounded-full h-64 w-64"
          src="../images/avatar-image.jpg" 
          alt="avatar-image"
        >
      </div>
      <div class="about flex flex-col justify-center items-center sm:items-start">
        <h2 
          class="flex flex-row text-3xl text-center mb-3 font-normal text-black text-4xl"
        >
          {{ fullName }}
        </h2>
        <p 
          class="mb-3 text-lg"
        >
          <span>&#x1F4E7; </span>{{ position }}
        </p>
        <p
          class="mb-3 text-base"
        >
          <span>&#128205;</span>{{ location }}
        </p>
        <div class="skills mb-3">
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
          >
            html
          </span>
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
          >
            css
          </span>
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
          >
            javascript
          </span>
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
          >
            outlook mso code
          </span>
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
          >
            sql
          </span>
        </div>
        <div
          class="contact-links flex flex-row justify-center w-full sm:justify-start"
        >
          <a href="https://www.linkedin.com/in/yanina-trekhleb/" target="_blank" class="mr-2 w-8">
            <img src="../images/logo/linkedin-logo.png" alt="linkedin-logo">
          </a>
          <a href="https://github.com/YaninaTrekhleb" target="_blank" class="mr-2 w-8">
            <img src="../images/logo/github-logo-icon.png" alt="github-logo">
          </a>
          <a href="https://www.instagram.com/home_full_of_recipes/" target="_blank" class="mr-2 w-8">
            <img src="../images/logo/instagram-logo.png" alt="instagram-logo">
          </a>
          <a href="https://www.youtube.com/c/HomefullofrecipesCookingchannel" target="_blank" class="mr-2 w-8">
            <img src="../images/logo/youtube-logo.png" alt="youtube-logo">
          </a>
          <a href="https://www.udemy.com/course/ukrainian-cooking-authentic-ukrainian-recipes-course/" target="_blank" class="mr-2 w-8">
            <img src="../images/logo/udemy-logo.png" alt="udemy-logo">
          </a>
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
      position: 'Campaign Developer',
      location: 'Amsterdam, The Netherlands'
      }
    }
  }
</script>

<style scoped>
</style>
