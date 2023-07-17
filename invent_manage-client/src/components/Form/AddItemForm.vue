<template>
    <div class="add-item">
        <h3 class="form-heading">Add Inventory Item</h3>
    <form>
        <div class="form-fields">
            <div class="add-column-1">
                <div class="field">
                    <BaseInput
                    v-model="event.name"
                    label="Item Name"
                    type="text"
                    />
                    <div>
                        <span v-for="error in v$.name.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>
                    </div>
                </div>
                
                <div class="field">
                    <BaseInput
                    v-model="event.batch_number"
                    label="Batch Id"
                    type="text"
                    />
                    <div>
                        <span v-for="error in v$.batch_number.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>
                    </div> 
                </div>
                
                <div class="field">
                    <BaseInput
                        v-model="event.quantity"
                        label="Quantity"
                        type="number"
                        placeholder="0"
                        min = "0"
                    />
                    <div>
                        <span v-for="error in v$.quantity.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>      
                    </div>
                </div>

                <div class="field">
                    <div>
                        <label class="input-label">Availability Status</label>
                    </div>
                
                    <select v-model="event.status" class="select-field">
                    <option 
                        v-for="option in selectOptions.availabilityStatus" 
                        :key="option.value" 
                        :value="option.value"
                        
                    >
                        {{ option.text }}
                    </option>
                    </select>
                    <div>
                        <span v-for="error in v$.status.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>
                    </div>
                </div>
            </div>
            <!-- :selected="value === option.value" -->

            <div class="add-column-2">
                <div class="field">
                    <div>
                        <label class="input-label">Category</label>
                    </div>
                    
                    <select v-model="event.category" class="select-field">
                    <option 
                        v-for="option in selectOptions.category" 
                        :key="option.value" 
                        :value="option.value"
                        
                    >
                    {{ option.text }}
                    </option>
                    </select>
                    <div>
                        <span v-for="error in v$.category.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>
                    </div>
                </div>

                <div class="field">
                    <BaseInput
                        v-model="event.shelf_location"
                        label="Storage Location"
                        type="text"
                    />
                    <div>
                        <span v-for="error in v$.shelf_location.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>
                    </div>
                </div>

                <div class="field">
                    <BaseInput
                        v-model="event.last_updated"
                        label="Last Modified"
                        type="date"
                    />
                    <div>
                        <span v-for="error in v$.last_updated.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>
                    </div>
                </div>

                <div class="field">
                    <BaseInput
                        v-model="event.cost_per_unit"
                        label="Unit Cost"
                        type="number"
                    />
                    <div>
                        <span v-for="error in v$.cost_per_unit.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="buttons">
            <primaryBtn type="button" @submit="addItem" class="add-button" style="margin: 10px;">Add Item</primaryBtn>
            <primaryBtn type="button" @submit="closeDialog" class="add-button" style="padding: 5px; margin: 10px;">Cancel</primaryBtn>
        </div>
    </form>
    </div>
    <!-- <span>{{ event }}</span> -->
    <!-- <span v-for="error in v$.$errors" :key="error.$uid">{{ error.$property }} - {{ error.$message }}</span> -->
    
</template>

<script setup lang="ts">
import { dummyData } from '@/utils/dummydata';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core'
import {required, minValue} from '@vuelidate/validators'

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
        const result = await v$.value.$validate()
        if(result){
            // we will add this to state and also send to server via api
            console.log("valid")
        }
        else{
            // nothing happens
            console.log("invalid")
            return
        }
    }

    const closeDialog = () => {
        console.log("close dialog")
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
</script>

<style>
@import './AddItemForm.module.scss';
</style>