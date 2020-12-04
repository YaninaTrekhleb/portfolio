<template>
  <div id="project" class="mb-2 bg-gray-50 bg-opacity-0.3 rounded">
    <section>
      <div>
        <h3 class="text-2xl underline font-bold text-gray-500 hover:text-blue-200 my-2.5 p-2">
          <a :href="project.url" target="_blank">{{ project.name }}</a>
        </h3>
        <div class="h-64 overflow-hidden mb-2.5">
          <a :href="project.url" target="_blank">
            <img :src="project.img" alt="project-image" class="h-auto w-full">
          </a>
        </div>
        <p class="mb-2.5">
          {{ project.date }}
        </p>
        <div class="flex flex-row justify-center">
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