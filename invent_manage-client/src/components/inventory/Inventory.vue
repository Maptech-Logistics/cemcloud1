<template>
  <div class="table__parent">
    <Search @update-query="updateQuery" @update-filter="updateFilter" />
    <primaryBtn @click="addToggleDialog">Add Item</primaryBtn>

    <div>
      <DiaLog :title="addTitle" @toggle-dialog="addToggleDialog" v-if="addIsOpen">
        <template #content>
          <AddItemForm @change-visibility="addToggleDialog"/>
        </template>
      </DiaLog>
    </div>
    
    <!-- <span style="color: black">{{ searchQuery }}</span> -->
    <Loader v-if="isLoading" />
    <Table v-else :headers="headers" :body="apiData" :sortColumn="sortColumn" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Table from '../table/Table.vue'
import Search from '../search/Search.vue'
import { BASE_URL, headers } from '@/utils/constants'
import { sortColumn } from '@/utils/functions'
import { fetchData } from '@/api/fetchData'
import type { TableData } from '@/types/types'
import primaryBtn from '@/components/Buttons/primaryBtn.vue'

const apiData = ref<TableData[]>([])
const searchQuery = ref<string>('')
const filter = ref<string>('')
const addIsOpen = ref(false)
const addTitle = "Add Inventory Item"

let debounceTimer: ReturnType<typeof setTimeout> | null = null

const isLoading = ref(false)

const fetchTableData = async (filter: string) => {
  isLoading.value = true
  try {
    const data = searchQuery.value
      ? await fetchData(
          `${BASE_URL}/inventory?q=${searchQuery.value}
          ${filter ? '&category=' + filter : ''}`
        )
      : await fetchData(`${BASE_URL}/inventory${filter ? '?category=' + filter : ''}`)
    apiData.value = data
  } catch (error) {
    // error handler here :TODO
  } finally {
    isLoading.value = false
  }
}

const debounceSearch = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(fetchTableData, 500) // Adjust the debounce delay as needed (in milliseconds)
}

const updateQuery = (query: string) => {
  searchQuery.value = query
  debounceSearch()
}

const updateFilter = async (_filter: string) => {
  filter.value = _filter
  // await nextTick()
  // console.log(filter.value)
  fetchTableData(filter.value)
}

const addToggleDialog = () => {
  addIsOpen.value = !addIsOpen.value
}

onMounted(() => fetchTableData(filter.value))
</script>

<style lang="scss" scoped>
.table__parent {
  width: 100%;
  padding: 1rem;
}
</style>