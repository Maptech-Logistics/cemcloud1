<script setup lang="ts">
import HeadLine from '@/components/HeadLine.vue'
import SideBar from '@/components/sidebar/SideBar.vue'
import Modal from '@/components/modal/Modal.vue'
import AddItemForm from '@/components/Form/AddItemForm.vue'
import DiaLog from '@/components/dialog/DiaLog.vue'
import { ref } from 'vue';

// const show = ref(false)
// const toggleModal = () => {
//   show.value = !show.value
// }
</script>

<template>
  <main>
    <HeadLine msg="Welcome to the Maptec logistics inventory management dashboard" />
    <!-- <Modal :show="show" @close="toggleModal">
      <div class="modal-content">
        Creating my modal
      </div> 
    </Modal> -->
    <!-- <button @click="toggleModal" type="button">Toggle Modal</button> -->
  </main>
  <div>
    <p>i want to know that youre here o</p>
    <!-- <Dialog>
      <template #content>
        <AddItemForm />
      </template>
    </Dialog> -->
    <AddItemForm />
  </div>
  
</template>
