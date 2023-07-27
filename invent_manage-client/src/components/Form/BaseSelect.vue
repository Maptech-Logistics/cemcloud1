<template>
    <label>{{ label }}</label>
    <!-- <select v-bind="$attrs" :value="value" @change="$emit('update:value', $event.target.value)" :options="options"> -->
    
    <select 
        v-bind="$attrs"
        v-model="selected"
        label="Status"
        @change="$emit('value', $event.target.value)"
    >
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
            
        >
            {{ option.text }}
        </option>
    </select>
    
<!-- :selected="value === option.value" -->
    
    <span>mhm{{ value }}</span>

</template>

<script setup lang="js">
import {defineProps, ref} from 'vue';
    defineProps({
        label:{
            type: String,
            default: ""
        },
        value:{
            type: [String, Number],
            default: ""
        },
        options:{
            type: Array,
            default: () => []
        },
    });

    function handleChange (event) {
        // $props.value = event.target.value;
        // val = event.target.value;
        console.log(event.target.value);
    }
</script>

<style>

</style>
