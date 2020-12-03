<template>
  <div id="project">
    <section>
      <div class="project-container">
         <h3><a href="">{{ project.name }}</a></h3>
         <img :src="project.img" alt="" class="project-preview">
         <p class="project-date">
           {{ project.date }}
         </p>
         <div 
          v-for="tag in project.tags" :key="tag.name"
          class="skills-tag">
          <span 
            class="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal mr-2 mb-2 last:mr-0"
          >
            {{ tag.name }}
          </span>
         </div>
       </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'Project',
  data () {
    return {

    }
  },
  props: ['project'],
}
</script>

<style scoped>

</style>