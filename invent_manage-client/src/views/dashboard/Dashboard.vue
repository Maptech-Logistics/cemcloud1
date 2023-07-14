<script setup lang="ts">
import Inventory from '@/components/inventory/Inventory.vue'
</script>

<template lang="">
  <section>
    <!-- <h2>This is the dashboard</h2> -->
    <!-- <div class="stat__wrapper">
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      
    </div> -->
    <div class="inventory__wrapper">
      <inventory />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: absolute;
  left: 12rem;
  display: flex;
  // justify-content: center;
  flex-flow: column;
  width: 90%;
  height: 100vh;
  .stat__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 1;
    background-color: rgba(219, 237, 238, 0.266);
    margin: 1rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .inventory__wrapper {
    display: flex;
    justify-content: space-around;
    overflow: scroll;
  }
}
</style>
