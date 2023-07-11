<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/sidebar/SideBar.vue'
import primaryBtn from './components/Buttons/primaryBtn.vue';
import secondaryBtn from './components/Buttons/secondaryBtn.vue';
import outlineBtn from './components/Buttons/outlineBtn.vue';
import roundedBtn from './components/Buttons/roundedBtn.vue';
import disabledBtn from './components/Buttons/disabledBtn.vue';
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
