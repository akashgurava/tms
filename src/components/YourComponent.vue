<template>
  <div class="container">
    {{ fullName }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface User {
  firstName: string;
  lastName: number;
}

@Component
export default class YourComponent extends Vue {
  @Prop({ type: String, required: true }) readonly user!: string;

  message = 'This is a message';

  get fullName(): string {
    return `${this.user}`;
  }
}
</script>
