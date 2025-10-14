<template>
  <div id="creatives">
    <section>
      <h3 class="text-4xl font-semibold text-gray-700 pt-4 mb-10">Content Creation & Creative</h3>
      <div class="grid grid-cols-1 gap-8 mx-10 sm:grid-cols-3">
        <div 
          v-for="creative in creatives" :key="creative.name"
        >
          <Creative v-bind:creative="creative"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {creatives} from '../database/creatives'
import Creative from './Creative.vue'

export default {
  name: 'Creatives',
  data () {
    return {
      creatives: creatives
    }
  },
  components: {
    Creative
  }
}
</script>

<style scoped>

</style>