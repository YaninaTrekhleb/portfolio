<template>
  <div id="certificates">
    <section>
      <h3 class="text-4xl font-semibold text-gray-700 pt-4 mb-10">Certificates</h3>
      <div class="grid grid-cols-1 gap-8 mx-10 sm:grid-cols-3">
        <div 
          v-for="certificate in certificates" :key="certificate.name"
        >
          <Certificate v-bind:certificate="certificate"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {certificates} from '../database/certificates'
import Certificate from './Certificate.vue'

export default {
  name: 'Certificates',
  data () {
    return {
      certificates: certificates
    }
  },
  components: {
    Certificate
  }
}
</script>

<style scoped>

</style>