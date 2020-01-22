<template>
  <div class="fullscreen bg-blue">
    <div class="flex-column container min-h-screen">
      <div class="flex-grow w-full bg-gray-700">
        <nuxt />
      </div>
      <v-footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VFooter from '@/components/VFooter.vue';

export default Vue.extend({
  components: { VFooter },
});
</script>
