<template>
    <!-- <div> -->
        <div>
            <label class="input-label">{{ label }}</label>
        </div>
        <input 
            class="class"
            v-bind="$attrs"
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
        />   
    <!-- </div> -->
    
</template>

<script setup lang="js">
    defineProps({
        label:{
            type: String,
            default: ""
        },
        modelValue:{
            type: [String, Number ],
            default: ""
        },
    });
    // console.log(modelValue);
</script>

<style>
    .input-label{
        font-size: 14px;
        font-weight: 20;
        justify-content: left;
    }
</style>
