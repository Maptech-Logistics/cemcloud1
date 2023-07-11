<template>
    <button class="secondary-button" @click="handleClick">
        <slot>Secondary Button</slot> 
    </button>
  </template>

<script>
    export default{
        methods: {
            handleClick() {
                //notify the parent component about the button click
                this.$emit('submit');
            }
        }
    }
</script>
  
<style scoped>
.secondary-button {
  width: 100px;
  height: 30px;
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 25%;
  will-change: transform;
}

.secondary-button:disabled {
  pointer-events: none;
}

.secondary-button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.secondary-button:active {
  box-shadow: none;
  transform: translateY(0);
}
  </style>
  