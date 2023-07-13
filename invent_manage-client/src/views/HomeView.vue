<script setup lang="ts">
import HeadLine from '@/components/HeadLine.vue'
import SideBar from '@/components/sidebar/SideBar.vue'
import Chart from '@/components/visual-summary/Chart.vue'
</script>

<template>
  <main>
    <div>
      <HeadLine msg="Welcome to the Maptec logistics inventory management dashboard" />
      <Chart />
    </div>
  </main>
</template>
