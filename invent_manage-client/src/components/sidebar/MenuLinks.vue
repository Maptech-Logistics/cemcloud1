<template>
  <div class="menu">
    <router-link v-for="link in links" :to="link.to" class="button" :key="link.to">
      <span class="icons"><component :is="link.icon" /> </span>
      <span class="text">{{ link.text }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
interface Link {
  to: string
  icon: any
  text: string
}

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
