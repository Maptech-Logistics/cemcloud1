<template>
    <div class="loader" v-if="isLoading">
      <div class="loader-spinner"></div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Loader',
    setup() {
      const isLoading = ref(false);
  
      const showLoader = () => {
        isLoading.value = true;
      };
  
      const hideLoader = () => {
        isLoading.value = false;
      };
  
      return {
        isLoading,
        showLoader,
        hideLoader
      };
    }
  };
  </script>
  
  <style scoped>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .loader-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  