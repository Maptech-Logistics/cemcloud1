<template>
  <div class="dialog-container">
    <div class="dialog-overlay"></div>
    <div class="dialog-content">
      <div class="dialog-header">
        <h2 class="dialog-title">{{ title }}</h2>
        <button class="dialog-close" @click="toggleDialog">
          <X color="black" :size="20" />
        </button>
      </div>
      <div class="dialog-body">
        <slot name="content"> </slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import {X} from 'lucide-vue-next'
export default {
  props: {
    title: String,
  },

  methods: {
    toggleDialog(){
      console.log("emmiting toggle-dialog")
      this.$emit('toggle-dialog')
    }
  },

  components: {
    X
  },

}
</script>

<style scoped>
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.dialog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.dialog-content {
  position: relative;
  background-color: #ffffff;
  border-radius: 4px;
  max-width: 500px;
  min-width: 400px;
  z-index: 2;
}

.dialog-header {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dialog-title {
  margin: 0;
}

.dialog-close {
  background: none;
  border: none;
  cursor: pointer;
  color: #888888;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.dialog-close:hover {
  background-color: #dddddd;
}

.dialog-body {
  padding: 16px;
}

.dialog-footer {
  padding: 16px;
}
</style>
