<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search..." @input="handleSearch" />
    <select v-model="filter" @input="handleSelect">
      <option v-for="(category, index) in categories" :value="category" :key="index">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
import { fetchCategories } from '@/api/fetchCategories'
import { BASE_URL } from '@/utils/constants'

export default {
  data() {
    return {
      searchQuery: '',
      categories: [],
      filter: ''
    }
  },
  methods: {
    fetchData() {
      fetchCategories(`${BASE_URL}/inventory`)
        .then((response) => {
          const categories = response.map((item) => item.category)
          const uniqueCategories = [...new Set(categories)]
          this.categories = uniqueCategories
          console.log(uniqueCategories)
        })
        .catch((error) => {
          console.error('Error retrieving data:', error)
        })
    },
    handleSearch() {
      this.$emit('updateQuery', this.searchQuery)
    },
    handleSelect() {
      this.$emit('updateFilter', this.filter)
      console.log(this.filter)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
