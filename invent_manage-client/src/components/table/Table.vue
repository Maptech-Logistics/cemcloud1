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
            @click="setCol(index)"
            :class="{ active: col === index }"
            title="sort"
          >
            <div class="header-content">
              {{ headName }}
              <span v-if="col === index" class="sort-icon">
                <i v-if="sortOrder === 'asc'" class="arrow-up-icon"></i>
                <i v-else class="arrow-down-icon"></i>
              </span>
            </div>
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
          <tr v-for="(data, index) in sortedData" :key="index">
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
          <Button class="delete-button" style="color: rgb(1, 4, 16); background-color: var(--app-lightblue);" @click="deleteItem">Delete</Button>
          <Button class="cancel-button" style="color: rgb(226, 27, 60); background-color: var(--app-lightred);" @click="toggleDialog">Cancel</Button>
        </div>
      </template>
    </CustomDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { formatTimeAgo, sortColumn } from '@/utils/functions';
import type { TableData, TableProps } from '@/types/types';
import CustomDialog from '@/components/dialog/DiaLog.vue';
import { deleteData } from '@/api/deleteInventory';

const props = defineProps<TableProps>();
const col = ref(0);
const isDialogOpen = ref(false);
const dialogTitle = ref('Delete Confirmation');
const selectedItem = ref<TableData | null>(null);
const loading = ref(true);
const sortOrder = ref('');

const setCol = (index: number): void => {
  if (index === col.value) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    col.value = index;
    sortOrder.value = 'asc';
  }
};

const openDialog = (item: TableData): void => {
  selectedItem.value = item;
  isDialogOpen.value = true;
};

const toggleDialog = (): void => {
  isDialogOpen.value = !isDialogOpen.value;
};

const deleteItem = async (): Promise<void> => {
  try {
    if (selectedItem.value) {
      await deleteData(selectedItem.value.id);
    }
    toggleDialog();
  } catch (error) {
    console.error('Error deleting item:', error);
    // Handle the error:TODO
  }
};

setTimeout(() => {
  loading.value = false;
}, 2000);

const sortedData = computed(() => {
  const { body, headers } = props;
  const column = headers[col.value];
  return sortColumn(column.toLowerCase(), body, sortOrder.value);
});

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
  color: var(--background-secondary);
}

.header-content {
  display: flex;
  align-items: center;
}

.sort-icon {
  display: flex;
  align-items: center;
  margin-left: 4px;
  font-size: 12px;
}

.arrow-up-icon:before {
  content: "↑"; /* Upward arrow icon */
  font-size: 30px;
}

.arrow-down-icon:before {
  content: "↓"; /* Downward arrow icon */
  font-size: 30px;
}
</style>
