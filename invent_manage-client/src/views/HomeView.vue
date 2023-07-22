<script setup lang="ts">
import HeadLine from '@/components/HeadLine.vue'
import SideBar from '@/components/sidebar/SideBar.vue'
import AddItemForm from '@/components/Form/AddItemForm.vue'
import UpdateItemForm from '@/components/Form/UpdateItemForm.vue'
import primaryBtn from '@/components/Buttons/primaryBtn.vue'
import { ref } from 'vue';


const addIsOpen = ref(false)

const addToggleDialog = () => {
  addIsOpen.value = !addIsOpen.value
}

const addTitle = "Add Inventory Item"


</script>

<template>
  <main>
    <HeadLine msg="Welcome to the Maptec logistics inventory management dashboard" />
    <primaryBtn @click="addToggleDialog">Add Item</primaryBtn>

  </main>
  <div>
    <DiaLog :title="addTitle" @toggle-dialog="addToggleDialog" v-if="addIsOpen">
      <template #content>
        <AddItemForm @change-visibility="addToggleDialog"/>
      </template>
    </DiaLog>
  </div>
  
</template>
