<template lang="">
  <div class="table__parent">
    <Table :headers="headers" :body="dummyData" :sortColumn="sortColumn" />
  </div>
</template>

<script setup lang="ts">
import Table from '../table/Table.vue'
import { headers, dummyData } from '@/utils/dummydata'

interface TableData {
  name: string
  batch_number: string
  quantity: number
  status: 'in-stock' | 'out-of-stock'
  category: string
  shelf_location: string
  last_updated: Date
  cost_per_unit: number
  buttons?: any
}

const sortColumn = (headName: string): void => {
  // Logic for sorting the table by the selected column
  // will be implemented in utils/functions.ts
}
</script>

<style lang="scss" scoped>
.table__parent {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
