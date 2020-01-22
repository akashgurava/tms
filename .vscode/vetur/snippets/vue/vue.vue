<template>
  <div class="flex container">
    ${0}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class $TM_FILENAME_BASE extends Vue {
  // Props
  @Prop({ type: String, required: true }) readonly ${1}!: string;

  // Constants
  message = 'placeholder';

  // Computed methods
  get fullName(): string {
    return `${this.${1}}`;
  }
}
</script>

<style></style>
