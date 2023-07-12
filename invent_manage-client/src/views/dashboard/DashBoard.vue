<template lang="">
  <!-- <DiaLog :title="dialogTitle" v-show="isOpen" @toggle-dialog="toggleDialog">
    <template v-slot:content>
      <div style="display: flex; flex-direction: column; width: 100%">
        <input />
        <br />
        <input />
      </div>
    </template>
  </DiaLog> -->
  <h2>This is dashboard</h2>
</template>
<script>
// import DiaLog from '@/components/dialog/DiaLog.vue'
export default {
  data() {
    return {
      isOpen: true,
      dialogTitle: 'Edit Item ',
      email: ''
    }
  },

  // methods: {
  //   toggleDialog() {
  //     this.isOpen = !this.isOpen
  //   }
  // },

}
</script>
<style></style>
