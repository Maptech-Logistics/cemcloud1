<template>
  <div class="table__parent">
    <Table :headers="headers" :tableData="sortedTableData" :sortColumn="sortColumn" />
  </div>
</template>

<script setup lang="ts">
import Table from '../table/Table.vue'
import { headers, dummyData } from '@/utils/dummydata'
import { ref, computed } from 'vue'
import { sortTableData } from '@/utils/functions'

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

const tableData = ref<TableData[]>(dummyData)
const sortState = ref<Record<string, 'asc' | 'desc'>>({})

const sortColumn = (headName: string): void => {
  const currentSortOrder = sortState.value[headName] || 'asc'
  const nextSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc'
  sortState.value[headName] = nextSortOrder

  tableData.value = sortTableData(headName, tableData.value, nextSortOrder)
}

const sortedTableData = computed(() => {
  return tableData.value
})
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
