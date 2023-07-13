<template>
  <div>
    <Bar :data="data" :options="options" />
  </div>
</template>

<script lang="ts">
import { headers, dummyData } from '@/utils/dummydata'
// modularize and make one the graph
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const nameList: string[] = []
const quantityList: number[] = []

dummyData.forEach((item) => {
  nameList.push(item.name)
  quantityList.push(item.quantity)
})

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data:
      {
        labels: nameList,
        datasets: [{ data: quantityList, backgroundColor: '#3e95cd' }]
      }
      ,
      options: {
        responsive: true
      }
    }
  },
}
</script>