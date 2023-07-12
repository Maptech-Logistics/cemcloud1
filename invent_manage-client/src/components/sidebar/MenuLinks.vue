<template>
  <div class="menu">
    <router-link v-for="link in links" :to="link.to" class="button" :key="link.to">
      <div class="icons"><component :size="20" :is="link.icon" /></div>
      <span class="text">{{ link.text }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { Link } from '@/types/types';

const props = defineProps({
  links: {
    type: Array as () => Link[],
    required: true
  }
})
</script>

<style module lang="scss">
.text {
  transition: 0.2s ease-in-out;
}
</style>
