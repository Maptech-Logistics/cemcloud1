<template>
    <form>
        <BaseInput
        v-model="event.name"
        label="Item Name"
        type="text"
        />
        <span v-for="error in v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
        <!-- add v-if later -->
        <BaseInput
            v-model="event.batch_number"
            label="Batch Id"
            type="text"
        />
        <span v-for="error in v$.batch_number.$errors" :key="error.$uid">{{ error.$message }}</span>
        <BaseInput
            v-model="event.quantity"
            label="Quantity"
            type="number"
            placeholder="0"
            min = "0"
        />
        <span v-for="error in v$.quantity.$errors" :key="error.$uid">{{ error.$message }}</span>
        <!-- <BaseInput
            v-model="event.status"
            label="Status"
            placeholder="In Stock"
            type="in-stock | out-of-stock"
        /> -->
        <BaseSelect
            v-model="event.status"
            label="Status"
            options="selectOptions.availabilityStatus"
            placeholder="in-Stock"
        />
        <span v-for="error in v$.status.$errors" :key="error.$uid">{{ error.$message }}</span>
        <BaseSelect
            v-model="event.category"
            label="Category"
            options="selectOptions.category"
            placeholder="other"
        />
        <span v-for="error in v$.category.$errors" :key="error.$uid">{{ error.$message }}</span>
        <BaseInput
            v-model="event.shelf_location"
            label="Storage Location"
            type="text"
        />
        <span v-for="error in v$.shelf_location.$errors" :key="error.$uid">{{ error.$message }}</span>
        <BaseInput
            v-model="event.last_updated"
            label="Last Modified"
            type="date"
        />
        <span v-for="error in v$.last_updated.$errors" :key="error.$uid">{{ error.$message }}</span>
        <BaseInput
            v-model="event.cost_per_unit"
            label="Unit Cost"
            type="number"
        />
        <span v-for="error in v$.cost_per_unit.$errors" :key="error.$uid">{{ error.$message }}</span>
    </form>

    
    <primaryBtn type="submit" @submit="addItem">Add Item</primaryBtn>
    <!-- <span v-for="error in v$.$errors" :key="error.$uid">{{ error.$property }} - {{ error.$message }}</span> -->
    
</template>

<script setup lang="js">
import { dummyData } from '@/utils/dummydata';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core'
import {required, minValue} from '@vuelidate/validators'
import { reactive } from 'vue';
// import BaseSelect from "@/components/Form/BaseSelect.vue"
// import primaryBtn from "@/components/Buttons/primaryBtn.vue"
// import BaseInput from "@/components/BaseInput.vue"

    const event = ref({
        batch_number: "",
        name: "",
        quantity: 0,
        status: "",
        category: "",
        shelf_location: "",
        last_updated: "",
        cost_per_unit: "",
    })

    const selectOptions = ref({
        availabilityStatus: [{"value":"in-stock","text":"In Stock"}, {"value":"out-of-stock", "text":"Out of Stock"}],
        category: [{"value":"food", "text":"Food"}, {"value":"drinks","text":"Drinks"}, {"value":"stationery", "text":"Stationery"}, {"value":"cleaning", "text":"Cleaning"}, {"value":"other", "text":"Other"}]
    })

    const addItem = async () => {
        console.log(event.value)
        const result = await v$.value.$validate()
        // console.log(event.value)
        if(result){
            console.log("valid")
        }
        else{
            console.log(v$)
        }
    }

    const rules = {
        batch_number: {required},
        name: {required},
        quantity: {required, minValue: minValue(1)},
        status: {required},
        category: {required},
        shelf_location: {required},
        last_updated: {required},
        cost_per_unit: {required, minValue: minValue(0.1)},
    }

    const v$ = useVuelidate(rules, event)
    // const errors = ref(v$.$errors)
    
    
</script>

<style>

</style>