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
            @click="sortColumn(headName.toLowerCase()); setCol(index)"
            title="sort"
          >
            {{ headName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in body" :key="index">
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
          <!-- <td><component :size="20" :is="data.buttons!"  /></td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {formatTimeAgo} from '@/utils/functions'


interface TableData {
  name: string
  batch_number:string
  quantity: number
  status: 'in-stock' | 'out-of-stock'
  category: string
  shelf_location: string
  last_updated:Date
  cost_per_unit: number
  buttons?: any
}

interface Props {
  headers: string[]
  body: TableData[]
  sortColumn: (headName: string) => void
}

const props = defineProps<Props>()

const col = ref(0)

const setCol = (index: number): void => {
  col.value = index
}
</script>

<style scoped lang="scss">
@import './table.module.scss';
.action-btns{
  display: flex;
  justify-content: space-around;
}

</style>
