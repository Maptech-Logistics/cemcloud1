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
            <div @click="openDialog(data)">
              <delete-icon />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>

  <CustomDialog :title="dialogTitle" v-if="isDialogOpen" @toggle-dialog="toggleDialog">
  <template v-slot:content>
    <p>Are you sure you want to delete the following item?</p>
    <p>{{ selectedItem?.name }}</p>
    <!-- Display other properties of the item as needed -->
  </template>
  <template v-slot:footer>
    <button @click="deleteItem">Delete</button>
    <button @click="toggleDialog">Cancel</button>
  </template>
</CustomDialog>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { formatTimeAgo } from '@/utils/functions'
import type { TableData, TableProps } from '@/types/types'
import CustomDialog from '@/components/dialog/DiaLog.vue'
import { deleteData } from '@/api/deleteInventory'

const props = defineProps<TableProps>()
const col = ref(0)
const isDialogOpen = ref(false)
const dialogTitle = ref('Delete Confirmation')
const selectedItem = ref<TableData | null>(null)

const setCol = (index: number): void => {
  col.value = index
}

const openDialog = (item:TableData): void => {
  selectedItem.value = item
  isDialogOpen.value = true
}

const toggleDialog = (): void => {
  isDialogOpen.value = !isDialogOpen.value
}

const deleteItem = async (): Promise<void> => {
  try {
    if (selectedItem.value) {
      await deleteData(selectedItem.value.id)
      // Perform any necessary state update or API call to refresh the table
    }
    toggleDialog()
  } catch (error) {
    console.error('Error deleting item:', error)
    // Handle the error, e.g., show an error message
  }
}
</script>


<style scoped lang="scss">
@import './table.module.scss';
.action-btns {
  display: flex;
  justify-content: space-around;
}
</style>



