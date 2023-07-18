<script setup lang="ts">
import HeadLine from '@/components/HeadLine.vue'
import SideBar from '@/components/sidebar/SideBar.vue'
import AddItemForm from '@/components/Form/AddItemForm.vue'
import UpdateItemForm from '@/components/Form/UpdateItemForm.vue'
import primaryBtn from '@/components/Buttons/primaryBtn.vue'
import Table from '@/components/table/Table.vue'
// import DiaLog from '@/components/dialog/DiaLog.vue'
import { data } from '@/components/Form/data'
import { ref } from 'vue';
import { it } from 'date-fns/locale'



const addIsOpen = ref(false)
const updateIsOpen = ref(false)

const addToggleDialog = () => {
  addIsOpen.value = !addIsOpen.value
}
const updateToggleDialog = () => {
  updateIsOpen.value = !updateIsOpen.value
}

const prefillData = () => {
    const prefilled = data["apples"]
    return prefilled
}

const item = prefillData()
const itemData = ref({
  batch_number: item['batch_number'],
  name: item['name'],
  quantity: item['quantity'],
  status: item['status'],
  category: item['category'],
  shelf_location: item['shelf_location'],
  last_updated: item['last_updated'],
  cost_per_unit: item['cost_per_unit'],
})
// console.log(itemData['category'])

const addTitle = "Add Inventory Item"
const updateTitle = "Update Inventory Item"

</script>

<template>
  <main>
    <HeadLine msg="Welcome to the Maptec logistics inventory management dashboard" />
    <primaryBtn @click="addToggleDialog">Add Item</primaryBtn>
    <primaryBtn @click="updateToggleDialog">Update Item</primaryBtn>

    <!-- <Modal :show="show" @close="toggleModal">
      <div class="modal-content">
        Creating my modal
      </div> 
    </Modal> -->
    <!-- <button @click="toggleModal" type="button">Toggle Modal</button> -->
  </main>
  <div>
    <DiaLog :title="addTitle" @toggle-dialog="addToggleDialog" v-if="addIsOpen">
      <template #content>
        <AddItemForm />
      </template>
    </DiaLog>
    <DiaLog :title="updateTitle" @toggle-dialog="updateToggleDialog" v-if="updateIsOpen">
      <template #content>
        <UpdateItemForm :itemdata="itemData"/>
        <!-- <Table /> -->
      </template>
    </DiaLog>
  </div>
  
</template>
