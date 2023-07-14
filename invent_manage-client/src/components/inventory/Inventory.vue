<template lang="">
  <div class="table__parent">
    <Table :headers="headers" :body="apiData" :sortColumn="sortColumn" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Table from '../table/Table.vue';
import { BASE_URL, headers } from '@/utils/constants';
import { sortColumn } from '@/utils/functions';
import { fetchData } from '@/api/fetchData';
import type { TableData } from '@/types/types';

const apiData = ref<TableData[]>([]);

const fetchTableData = async () => {
  try {
    const data = await fetchData(`${BASE_URL}/inventory`);
    apiData.value = data;
  } catch (error) {
    // error handler here :TODO
  }
};

onMounted(fetchTableData);
</script>

<style lang="scss" scoped>
.table__parent {
  width: 100%;
  padding: 1rem;
}
</style>
