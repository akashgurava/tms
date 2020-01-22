<template>
  <div class="flex-column items-center">
    <div class="flex-center w-full h-8 text-white">
      NAVBAR
    </div>
    <search-bar />
    <div class="flex-center bg-gray-800 text-white w-full my-6">
      CONTENT
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBar from '~/components/SearchBar.vue';
export default Vue.extend({
  components: {
    SearchBar,
  },
});
</script>
