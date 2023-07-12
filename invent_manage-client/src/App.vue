<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/sidebar/SideBar.vue'
import { PiniaVuePlugin } from 'pinia'
import Chart from './components/visual-summary/Chart.vue'


</script>

<template>
  <main>
    <SideBar />
    <div>
      <RouterView />
      <Chart />
    </div>
    
  </main>

</template>

<style scoped lang="scss">
main {
  display: flex;
}

@media (max-width: 767px) {
  main {
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    overflow: hidden;
  }
}
</style>
