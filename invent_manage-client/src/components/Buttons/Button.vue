<template>
    <button :class="`${buttonClass} ${buttonType}`" @click="onClick" :style="style">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const buttonClass = 'button'; // Replace with your CSS class name for the button
  
  const props = defineProps({
    type: {
      type: String,
      default: 'solid',
    },
    onClick: {
      type: Function,
      default: undefined,
    },
    style: {
      type: Object,
      default: () => ({}),
    },
  });
  
  const onClick = (event) => {
    if (props.onClick) {
      props.onClick(event);
    }
  };
  </script>
  
<style scoped lang="scss">
    @import "./Button.module.scss"
</style>
  