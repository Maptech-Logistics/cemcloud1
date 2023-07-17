<template>
    <!-- <div> -->
        <div>
            <label class="input-label">{{ label }}</label>
        </div>
        <input 
            class="input-field"
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
        }
    });
    // console.log(modelValue);
</script>

<style>
    .input-label{
        font-size: 14px;
        font-weight: 20;
    }
    .input-field{
        max-width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 10px;
        font-size: 14px;
        font-weight: 20;
    }

</style>
