<template lang="">
  <div class="table__parent">
    <Table :headers="headers" :body="dummyData" :sortColumn="sortColumn" />
  </div>
</template>

<script setup lang="ts">
import Table from '../table/Table.vue'
import { headers, dummyData } from '@/utils/dummydata'
import {sortColumn} from '@/utils/functions'
</script>

<style lang="scss" scoped>
.table__parent {
  width: 100%;
  padding: 1rem;
}
</style>
