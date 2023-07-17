<template>
  <div class="tableWrapper">
    <table cellspacing="0">
      <colgroup>
        <col :span="col" :style="{ backgroundColor: '#ffff' }" />
        <col span="1" :style="{ backgroundColor: '#FAFAFA' }" />
      </colgroup>
      <thead>
        <tr>
          <th v-for="(headName, index) in headers" :key="index" @click="sortColumn(headName.toLowerCase()); setCol(index)"
            title="sort">
            {{ headName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="loading">
          <tr v-for="n in 16" :key="n">
            <td v-for="col in headers.length + 1" :key="col">
              <div class="skeleton-loader"></div>
            </td>
          </tr>
        </template>
        <template v-else>
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
              <div title="edit">
                <edit-icon />
              </div>
              <div @click="openDialog(data)" title="delete">
                <delete-icon />
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <CustomDialog :title="dialogTitle" v-if="isDialogOpen" @toggle-dialog="toggleDialog">
      <template v-slot:content>
        <h3>Are you sure you want to delete the following item?</h3>
        <span>{{ selectedItem?.name }}</span>
        <!-- Display other properties of the item as needed -->
      </template>
      <template v-slot:footer>
        <div class="dialog-footer">
          <Button class="delete-button" style="color: rgb(1, 4, 16); background-color: var(--app-lightblue);"
            @click="deleteItem">Delete</Button>
          <Button class="cancel-button" style="color: rgb(226, 27, 60); background-color: var(--app-lightred);"
            @click="toggleDialog">Cancel</Button>
        </div>
      </template>
    </CustomDialog>
  </div>
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
const loading = ref(true)

const setCol = (index: number): void => {
  col.value = index
}

const openDialog = (item: TableData): void => {
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
    }
    toggleDialog()
  } catch (error) {
    console.error('Error deleting item:', error)
    // Handle the error:TODO
  }
}

setTimeout(() => {
  loading.value = false
}, 2000)

</script>

<style scoped lang="scss">
@import './table.module.scss';
</style>
