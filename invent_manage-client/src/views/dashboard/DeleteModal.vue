<template>
    <div>
      <button @click="openDialog">Open Dialog</button>
  
      <CustomDialog :title="dialogTitle" v-if="isDialogOpen" @toggle-dialog="toggleDialog">
        <template v-slot:content>
          <!-- Content for the dialog body -->
          <p>This is the content of the dialog.</p>
        </template>
        <template v-slot:footer>
          <!-- Content for the dialog footer -->
          <button @click="closeDialog">Close</button>
        </template>
      </CustomDialog>
    </div>
  </template>
  
  <script>
  import CustomDialog from '@/components/dialog/DiaLog.vue';
  
  export default {
    components: {
      CustomDialog
    },
    data() {
      return {
        isDialogOpen: false,
        dialogTitle: 'Custom Dialog',
      };
    },
    methods: {
      openDialog() {
        this.isDialogOpen = true;
      },
      closeDialog() {
        this.isDialogOpen = false;
      },
      toggleDialog() {
        this.isDialogOpen = !this.isDialogOpen;
      },
    },
  };
  </script>
  