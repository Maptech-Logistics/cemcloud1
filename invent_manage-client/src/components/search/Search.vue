<template>
  <div class="wrapper">
    <div class="search-container">
      <Search size="15" />
      <input
        class="search-input"
        type="text"
        v-model="searchQuery"
        placeholder="Search inventory ..."
        @input="handleSearch"
      />
    </div>
    <select id="category-select"  class="select-input" v-model="filter" @change="handleSelect">
      <option value="">All</option>
      <option v-for="(category, index) in categories" :value="category" :key="index">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
import { fetchCategories } from '@/api/fetchCategories'
import { BASE_URL } from '@/utils/constants'
import { Search } from 'lucide-vue-next'

export default {
  data() {
    return {
      searchQuery: '',
      categories: [],
      filter: ''
    }
  },
  components: {
    Search
  },
  methods: {
    fetchData() {
      fetchCategories(`${BASE_URL}/inventory`)
        .then((response) => {
          const categories = response.map((item) => item.category)
          const uniqueCategories = [...new Set(categories)]
          this.categories = uniqueCategories
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
<style scoped>
.wrapper {
  width: 50%;
  display: flex;
  align-items: center;
}
.search-container {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0 1rem;
  border-radius: 4px;
  widows: 80%;
  flex: 1;
  margin-right: 1rem;
  /* width: 100%; */
}
.search-input {
  outline: none;
  border: none;
  padding: 0.7rem;
  background-color: inherit;
}

.select-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
}

.select-input:focus {
  outline: none;
  border-color: #aaa;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
