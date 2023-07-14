<template>
  <div class="tableWrapper">
    <table cellspacing="0">
      <colgroup>
        <col :span="col" :style="{ backgroundColor: '#ffff' }" />
        <col span="1" :style="{ backgroundColor: '#FAFAFA' }" />
      </colgroup>
      <thead>
        <tr>
          <th
            v-for="(headName, index) in headers"
            :key="index"
            @click="sortColumn(headName.toLowerCase())"
            :class="{ active: isSorted(headName.toLowerCase()) }"
            title="sort"
          >
            <div class="header-content">
              {{ headName }}
              <template v-if="shouldShowArrow(headName.toLowerCase())">
                <span v-if="isSorted(headName.toLowerCase())" :class="getSortDirection(headName.toLowerCase())"></span>
              </template>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in sortedTableData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.batch_number }}</td>
          <td>{{ data.quantity }}</td>
          <td>{{ data.status }}</td>
          <td>{{ data.category }}</td>
          <td>{{ data.shelf_location }}</td>
          <td>{{ formatTimeAgo(data.last_updated) }}</td>
          <td>{{ data.cost_per_unit }}</td>
          <td class="action-btns">
            <edit-icon />
            <delete-icon />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { formatTimeAgo } from '@/utils/functions'

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

interface Props {
  headers: string[]
  tableData: TableData[]
  sortColumn: (headName: string) => void
}

const props = defineProps<Props>()

const col = ref(0)
const sortColumns = ref<string[]>([]) // Store the columns that have been sorted
const sortedTableData = ref(props.tableData)

const setCol = (index: number): void => {
  col.value = index
}

const sortColumn = (headName: string): void => {
  const sortIndex = sortColumns.value.indexOf(headName.toLowerCase())

  if (sortIndex === -1) {
    sortColumns.value = [headName.toLowerCase(), 'asc'] // Replace the existing sort columns with the new one
  } else {
    const sortDirection = sortColumns.value[sortIndex + 1]
    sortColumns.value.splice(sortIndex + 1, 1, sortDirection === 'asc' ? 'desc' : 'asc')
  }

  props.sortColumn(headName.toLowerCase())
}

const isSorted = (headName: string): boolean => {
  return sortColumns.value.includes(headName.toLowerCase())
}

const getSortDirection = (headName: string): string => {
  const sortIndex = sortColumns.value.indexOf(headName.toLowerCase())
  const sortDirection = sortColumns.value[sortIndex + 1]
  return sortDirection === 'asc' ? 'sort-arrow-up' : 'sort-arrow-down'
}

const shouldShowArrow = (headName: string): boolean => {
  const excludedHeaders = ['batch number', 'storage location', 'unit cost', 'date modified', 'status', 'actions']
  return !excludedHeaders.includes(headName.toLowerCase())
}

// Watch for changes in the tableData prop and update the sortedTableData
watch(() => props.tableData, (newTableData) => {
  sortedTableData.value = [...newTableData] // Create a copy to trigger reactivity
})
</script>

<style scoped lang="scss">
@import './table.module.scss';

.tableWrapper {
  overflow-x: auto;
}

th {
  cursor: pointer;
}

th.active {
  color: #0000ff;
}

.header-content {
  display: flex;
  align-items: center;
}

.sort-arrow-up:before {
  content: "▲"; /* Upward triangle icon */
}

.sort-arrow-down:before {
  content: "▼"; /* Downward triangle icon */
}

.sort-arrow {
  margin-left: 4px;
  font-size: 12px;
}
</style>
