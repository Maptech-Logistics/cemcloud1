<template>
    <div class="add-item">
        <!-- <h3 class="form-heading">Add Inventory Item</h3> -->
    <form>
        <div class="form-fields">
            <div class="field">
                <BaseInput
                class="field-box"
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
                class="field-box"
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
                    class="field-box"
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
            
                <select v-model="event.status" class="field-box">
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
        
            <div class="field">
                <div>
                    <label class="input-label">Category</label>
                </div>
                
                <select v-model="event.category" class="field-box">
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
                    class="field-box"
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
                    class="field-box"
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
                    class="field-box"
                    v-model="event.cost_per_unit"
                    label="Unit Cost"
                    type="number"
                />
                <div>
                    <span v-for="error in v$.cost_per_unit.$errors" :key="error.$uid" class="validate-messages">{{ error.$message }}</span>
                </div>
            </div>
        </div>

        <div class="buttons">
            <primaryBtn type="button" @submit="addButton" class="add-button" style="margin: 10px;">Add Item</primaryBtn>
        </div>
    </form>
    </div>
    
</template>

<script setup lang="js">
import { dummyData } from '@/utils/dummydata';
import {data} from './data';
import { ref, defineProps } from 'vue';
import useVuelidate from '@vuelidate/core'
import {required, minValue, numeric} from '@vuelidate/validators'
import { add } from 'date-fns';
import { createHydrationRenderer } from 'vue';
import { it } from 'date-fns/locale';

const event = ref({
        batch_number: "",
        name: "",
        quantity: 0,
        status: "",
        category: "",
        shelf_location: "",
        last_updated: "",
        cost_per_unit: 0,
    })

    const selectOptions = ref({
        availabilityStatus: [{"value":"in-stock","text":"In Stock"}, {"value":"out-of-stock", "text":"Out of Stock"}],
        category: [{"value":"food", "text":"Food"}, {"value":"drinks","text":"Drinks"}, {"value":"stationery", "text":"Stationery"}, {"value":"cleaning", "text":"Cleaning"}, {"value":"other", "text":"Other"}]
    })

    const addButton = async () => {
        const result = await v$.value.$validate()
        if(result){
            // we will add this to state and also send to server via api
            // then we will close the dialog
            // $store.commit('addItem', event.value)
            data[event.name] = event.value
            console.log(data)
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
        quantity: {required, minValue: minValue(1), numeric},
        status: {required},
        category: {required},
        shelf_location: {required},
        last_updated: {required},
        cost_per_unit: {required, minValue: minValue(1), numeric},
    }

    const v$ = useVuelidate(rules, event) 

// console.log(data)
    // console.log(data['apples'])

    // defineProps({
    //     itemdata: {
    //         type: Object,
    //         default: () => {}
    //     }
    // })

    // const itemdata = {
    //     batch_number: data['apples'].batch_number,
    //     name: data['apples'].name,
    //     quantity: data['apples'].quantity,
    //     status: data['apples'].status,
    //     category: data['apples'].category,
    //     shelf_location: data['apples'].shelf_location,
    //     last_updated: data['apples'].last_updated,
    //     cost_per_unit: data['apples'].cost_per_unit,
    // }

    // console.log(itemdata)

    // this.itemdata = data['apples'].data

    // const sth = ref({
    //     batch_number: "event.batch_number",
    //     name: "itemdata.name",
    //     quantity: 0,
    //     status: "",
    //     category: "",
    //     shelf_location: "",
    //     last_updated: "",
    //     cost_per_unit: 0,
    // })
//    get items from data when update button is clicked
</script>

<style>
@import './AddItemForm.module.scss';
</style>