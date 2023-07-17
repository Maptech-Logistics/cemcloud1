<script setup lang="ts">
import HeadLine from '@/components/HeadLine.vue'
import SideBar from '@/components/sidebar/SideBar.vue'
import AddItemForm from '@/components/Form/AddItemForm.vue'
import primaryBtn from '@/components/Buttons/primaryBtn.vue';
// import DiaLog from '@/components/dialog/DiaLog.vue'
import { ref } from 'vue';

const addIsOpen = ref(false)

const toggleDialog = () => {
  addIsOpen.value = !addIsOpen.value
}
const title = "Add Inventory Item"

</script>

<template>
  <main>
    <HeadLine msg="Welcome to the Maptec logistics inventory management dashboard" />
    <primaryBtn @click="toggleDialog">Add Item</primaryBtn>

    <!-- <Modal :show="show" @close="toggleModal">
      <div class="modal-content">
        Creating my modal
      </div> 
    </Modal> -->
    <!-- <button @click="toggleModal" type="button">Toggle Modal</button> -->
  </main>
  <div>
    <DiaLog :title="title" @toggle-dialog="toggleDialog" v-if="addIsOpen">
      <template #content>
        <AddItemForm />
      </template>
    </DiaLog>
  </div>
  
</template>
