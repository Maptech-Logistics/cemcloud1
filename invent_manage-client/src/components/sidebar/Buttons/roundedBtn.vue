<template>
  <button class="rounded-button" @click="handleClick">
    <slopt>Rounded Button</slopt>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      //notify the parent component about the button click
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>
.rounded-button {
  all: unset;
  width: 100px;
  height: 70px;
  background-color: var(--background-secondary);
  border: 2px solid var(--app-lightblue);
  border-radius: 30px;
  box-shadow: var(--app-lightblue) 4px 4px 0 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.rounded-button:hover {
  background-color: #fff;
  color: var(--background-secondary);
}

.rounded-button:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .rounded-button {
    min-width: 120px;
    padding: 0 25px;
  }
}
</style>
