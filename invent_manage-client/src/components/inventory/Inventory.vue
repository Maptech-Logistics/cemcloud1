<template lang="">
  <div class="table__parent">
    <Table :headers="headers" :body="dummyData" :sortColumn="sortColumn" />

  </div>
</template>

<script setup lang="ts">
import EditIcon from '../icons/EditIcon.vue';
import Table from '../table/Table.vue'

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

const headers = ['Index', 'Name', 'Batch Number', 'Quantity', 'Status', 'Category','Storage Location', 'Date Modified','Unit Cost', 'Actions']

const dummyData: TableData[] = [
  {
    name: "Apples",
    batch_number: "A123",
    quantity: 100,
    status: "in-stock",
    category: "Fruits",
    shelf_location: "A1",
    last_updated: new Date("2023-07-11"),
    cost_per_unit: 0.5,
    // buttons: EditIcon
  },
  {
    name: "Bananas",
    batch_number: "B456",
    quantity: 75,
    status: "in-stock",
    category: "Fruits",
    shelf_location: "B3",
    last_updated: new Date("2023-07-10"),
    cost_per_unit: 0.3,
    // buttons: "Edit,Delete"
  },
  {
    name: "Milk",
    batch_number: "C789",
    quantity: 50,
    status: "in-stock",
    category: "Dairy",
    shelf_location: "C2",
    last_updated: new Date("2023-07-11"),
    cost_per_unit: 1.2,
    // buttons: "Edit,Delete"
  },
  {
    name: "Bread",
    batch_number: "D012",
    quantity: 25,
    status: "in-stock",
    category: "Bakery",
    shelf_location: "D4",
    last_updated: new Date("2023-07-09"),
    cost_per_unit: 2.5,
    // buttons: "Edit,Delete"
  },
  {
    name: "Cereal",
    batch_number: "E345",
    quantity: 15,
    status: "in-stock",
    category: "Breakfast",
    shelf_location: "E1",
    last_updated: new Date("2023-07-11"),
    cost_per_unit: 3.0,
    // buttons: "Edit,Delete"
  },
  {
    name: "Water Bottles",
    batch_number: "F678",
    quantity: 50,
    status: "in-stock",
    category: "Beverages",
    shelf_location: "F2",
    last_updated: new Date("2023-07-10"),
    cost_per_unit: 0.8,
    // buttons: "Edit,Delete"
  },
  {
    name: "Paper Towels",
    batch_number: "G901",
    quantity: 20,
    status: "in-stock",
    category: "Household",
    shelf_location: "G3",
    last_updated: new Date("2023-07-09"),
    cost_per_unit: 1.5,
    // buttons: "Edit,Delete"
  },
  {
    name: "Toothpaste",
    batch_number: "H234",
    quantity: 10,
    status: "in-stock",
    category: "Personal Care",
    shelf_location: "H2",
    last_updated: new Date("2023-07-11"),
    cost_per_unit: 2.0,
    // buttons: "Edit,Delete"
  }
];



const sortColumn = (headName: string): void => {
  // Logic for sorting the table by the selected column
}
</script>


<style lang="scss" scoped>
  .table__parent{
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>