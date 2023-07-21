<template>
    <div class="add-item">
        <div>{{ inventoryCount }}</div>
        <div>{{ inventory }}</div>
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
    import { ref } from 'vue';
    import useVuelidate from '@vuelidate/core'
    import {required, minValue, numeric} from '@vuelidate/validators'
    import { useInventoryStore } from '@/stores/counter'
    import { storeToRefs } from 'pinia'
    import { BASE_URL } from '@/utils/constants';
    import axios from 'axios';

    const getDate = () => {
        const currentDate = new Date();
      const date = currentDate;
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();

      return `${month}/${day}/${year}`;
    
    }
    
    const store = useInventoryStore()
    const {inventory, inventoryCount} = storeToRefs(store)
    const emits = defineEmits(['change-visibility'])
    const currentDate = getDate()
    console.log(currentDate)
  
    const event = ref({
        "name": "",
        "batch_number": "",
        "quantity": 0,
        "status": "",
        "category": "",
        "shelf_location": "",
        "last_updated": new Date().toISOString().slice(0,10),
        "cost_per_unit": 0,
    })

    const selectOptions = ref({
        availabilityStatus: [{"value":"in-stock","text":"In Stock"}, {"value":"out-of-stock", "text":"Out of Stock"}],
        category: [{"value":"food", "text":"Food"}, {"value":"drinks","text":"Drinks"}, {"value":"stationery", "text":"Stationery"}, {"value":"cleaning", "text":"Cleaning"}, {"value":"other", "text":"Other"}]
    })

    const addButton = async () => {
        const result = await v$.value.$validate()

        if(result){
            const response = await createInventoryItem(BASE_URL + "\\inventory\\", event.value)
            if(response.status == 201){
                store.addInventory(event.value)
                emits('change-visibility')
            }
            else{
                console.log("failed")
            }
        }
        else{
            return
        }
    }


    const rules = {
        batch_number: {required},
        name: {required},
        quantity: {required, minValue: minValue(1), numeric},
        status: {required},
        category: {required},
        shelf_location: {required},
        last_updated: {required},
        cost_per_unit: {required, minValue: minValue(0.1), numeric},
    }

    const v$ = useVuelidate(rules, event) 
    
    const createInventoryItem = async (data) => {
    try {
            const response = await axios.post(BASE_URL + "\\inventory\\", data);
            return response;
        } catch (error) {
            console.error('Error creating data:', error);
            throw error;
        }
    }


    // console.log(getDate())
    // const date = new Date().toISOString().slice(0,10);
    // const date = new Date().toDateString();
    // console.log (date)
</script>

<style>
@import './AddItemForm.module.scss';
</style>