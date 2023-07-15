<template>
    <form>
        <BaseInput
        v-model="event.name"
        label="Item Name"
        type="text"
        />
        <span v-for="error in v$.value.$errors" :key="error.$iud">{{error}}</span> <!-- this is not working -->
        <BaseInput
            v-model="event.batch_number"
            label="Batch Id"
            type="text"
        />
        <BaseInput
            v-model="event.quantity"
            label="Quantity"
            type="number"
            placeholder="0"
            min = "0"
        />
        <BaseInput
            v-model="event.status"
            label="Status"
            placeholder="In Stock"
            type="in-stock | out-of-stock"
        />
        <BaseInput
            v-model="event.category"
            label="Category"
            type="text"
        />
        <BaseInput
            v-model="event.shelf_location"
            label="Storage Location"
            type="text"
        />
        <BaseInput
            v-model="event.last_updated"
            label="Last Modified"
            type="date"
        />
        <BaseInput
            v-model="event.cost_per_unit"
            label="Unit Cost"
            type="number"
        />
    </form>
    
    <primaryBtn type="submit" @submit="addItem">Add Item</primaryBtn>
    
</template>

<script setup lang="js">
import { dummyData } from '@/utils/dummydata';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core'
import {required} from '@vuelidate/validators'
import { reactive } from 'vue';
// import primaryBtn from "@/components/Buttons/primaryBtn.vue"
// import BaseInput from "@/components/BaseInput.vue"

    const event = ref({
        batch_number: "",
        name: "",
        quantity: 0,
        status: "in-stock",
        category: "",
        shelf_location: "",
        last_updated: "",
        cost_per_unit: "",
    })

    const availabilityStatus = ref(["in-stock", "out-of-stock"])
    const category = ref(["food", "drinks", "stationery", "cleaning", "other"])

    const addItem = async () => {
        const result = await v$.value.$validate()
        console.log(event.value)
        if(result){
            console.log("valid")
        }
        else{
            console.log("invalid")}
        // dummyData.push(event.value) doesn't work but consider state management at this point. what would happen?
    }

    const rules = {
        batch_number: {required},
        name: {required},
        quantity: {required},
        status: {required},
        category: {required},
        shelf_location: {required},
        last_updated: {required},
        cost_per_unit: {required},
    }

    const v$ = useVuelidate(rules, event)

    
</script>

<style>

</style>