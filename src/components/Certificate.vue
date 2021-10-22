<template>
  <div id="certificate" class="mb-2 bg-gray-50 border-solid border-2 border-gray-50 shadow bg-opacity-0.3 rounded">
    <section>
      <div>
        <h3 class="text-2xl underline font-semibold text-gray-500 hover:text-blue-200 my-2.5 p-2">
          <a :href="certificate.url" target="_blank">{{ certificate.name }}</a>
        </h3>
        <div class="sm:h-64 overflow-hidden mb-2.5">
          <a :href="certificate.url" target="_blank">
            <img :src="certificate.img" alt="certificate-image" class="h-auto w-full">
          </a>
        </div>
        <p class="mb-2.5">
          {{ certificate.date }}
        </p>
        <div class="flex flex-row flex-wrap justify-center">
          <div 
            v-for="tag in certificate.tags" :key="tag.name"
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
  name: 'Certificate',
  data () {
    return {

    }
  },
  props: ['certificate'],
}
</script>

<style scoped>

</style>