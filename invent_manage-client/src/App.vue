<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/sidebar/SideBar.vue'
</script>

<template>
  <main>
    <SideBar />
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  overflow: hidden;

}

@media (max-width: 767px) {
  main {
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
  }
}
</style>
