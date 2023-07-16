<template>
    <label>{{ label }}</label>
    <select v-bind="$attrs" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" :options="options">
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}</option>
    </select>  
    


</template>

<script setup lang="js">
    defineProps({
        label:{
            type: String,
            default: ""
        },
        modelValue:{
            type: [String, Number],
            default: ""
        },
        options:{
            type: Array,
            default: []
        },
    });
</script>

<style>

</style>
