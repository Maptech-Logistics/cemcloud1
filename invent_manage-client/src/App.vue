<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/sidebar/SideBar.vue'
import { PiniaVuePlugin } from 'pinia'


</script>

<template>
  <main>
    <SideBar />
    <div class="routes">
      <RouterView />

    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  overflow: hidden;

.routes {
  flex-grow: 1; /* Allow RouterView to expand and occupy available space */
}
}

@media (max-width: 767px) {
  main {
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
  }
}
</style>
