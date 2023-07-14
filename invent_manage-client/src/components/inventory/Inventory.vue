<template>
  <div class="table__parent">
    <Search @update-query="updateQuery" @update-filter="updateFilter" />
    <!-- <span style="color: black">{{ searchQuery }}</span> -->
    <Table :headers="headers" :body="apiData" :sortColumn="sortColumn" />
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
import { watch } from 'vue'

const apiData = ref<TableData[]>([])
const searchQuery = ref<string>('')
const filter = ref<string>('')

let debounceTimer: ReturnType<typeof setTimeout> | null = null

const fetchTableData = async (filter: string) => {
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

const updateFilter = (_filter: string) => {
  filter.value = _filter
  console.log(_filter)
  fetchTableData(_filter)
}


onMounted(() => fetchTableData(filter.value))
</script>

<style lang="scss" scoped>
.table__parent {
  width: 100%;
  padding: 1rem;
}
</style>
