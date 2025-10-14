<template>
  <div id="creative" class="mb-2 bg-gray-50 border-solid border-2 border-gray-50 shadow bg-opacity-0.3 rounded">
    <section>
      <div>
        <h3 class="text-2xl underline font-semibold text-gray-500 hover:text-blue-200 my-2.5 p-2">
          <a :href="creative.url" target="_blank">{{ creative.name }}</a>
        </h3>
        <div class="sm:h-64 overflow-hidden mb-2.5">
          <a :href="creative.url" target="_blank">
            <img :src="creative.img" alt="creative-image" class="h-auto w-full">
          </a>
        </div>
        <p class="mb-2.5">
          {{ creative.date }}
        </p>
        <div class="flex flex-row flex-wrap justify-left p-3">
          <p class="text-gray-700 leading-relaxed text-left">
            {{ creative.summary }}
          </p>
          <p class="text-gray-700 leading-relaxed text-left">
            <b>Skills:</b> {{ creative.skills }}
          </p>
          <p class="text-gray-700 leading-relaxed text-left">
           <b>Tools:</b> {{ creative.tools }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'Creative',
  data () {
    return {

    }
  },
  props: ['creative'],
}
</script>

<style scoped>

</style>