<template>
  <div class="flex-center w-full h-12 text-white bg-gray-800">
    &#169; Akash {{ new Date().getFullYear() }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VFooter extends Vue {
  name = 'v-footer';
}
</script>
