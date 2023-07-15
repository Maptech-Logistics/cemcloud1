<template>
    <label>{{ label }}</label>
    <select
        v-bind="$attrs"
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
    />   
    
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
        }
    });
</script>

<style>

</style>
