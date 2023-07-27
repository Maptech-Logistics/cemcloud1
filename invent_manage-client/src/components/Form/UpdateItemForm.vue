<template>
    <div class="add-item">
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
                    v-for="statusOption in selectOptions.availabilityStatus" 
                    :key="statusOption.value" 
                    :value="statusOption.value"
                    
                >
                    {{ statusOption.text }}
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
            <primaryBtn type="button" @submit="updateButton" class="add-button" style="margin: 10px;">Update Item</primaryBtn>
        </div>
    </form>
    </div>
    
</template>

<script setup lang="js">
    import { getItemData } from '@/api/getInventoryItem'
    import { BASE_URL } from '@/utils/constants'
    import { onMounted } from 'vue'
    import { ref } from 'vue'
    import useVuelidate from '@vuelidate/core'
    import { useInventoryStore } from '@/stores/counter'
    import {required, minValue, numeric} from '@vuelidate/validators'
    import axios from 'axios'

    const props = defineProps({
        itemId: {
            type: Number,
            default: 0
        }
    })

    const itemId = props.itemId

    const store = useInventoryStore()

    const event = ref({
    })

    onMounted(async() => {
        const response = await getItemData(BASE_URL + "/inventory/", itemId)
        response.last_updated = new Date().toISOString()
        event.value = response
    })

    const emits = defineEmits(['change-visibility'])

    const selectOptions = ref({
        availabilityStatus: [{"value":"in-stock","text":"In Stock"}, {"value":"out-of-stock", "text":"Out of Stock"}],
        category: [{"value":"Food", "text":"Food"}, {"value":"Stationery", "text":"Stationery"}, {"value":"Dairy", "text":"Dairy"}, {"value":"Beverages", "text":"Beverages"}, {"value":"Fruits", "text":"Fruits"}, {"value":"Meat", "text":"Meat"},  {"value":"Personal Care", "text":"Personal Care"}, {"value":"Pantry", "text":"Pantry"}, {"value":"Other", "text":"Other"}]
    })

    const updateButton = async () => {
        const result = await v$.value.$validate()
        if(result){
            try{
                await updateInventoryItem(itemId, event.value)
                store.addInventory(event.value)
                emits('change-visibility')
            } catch(error){
                console.error('Error updating data:', error);
                throw error;
            }
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

    const updateInventoryItem = async (itemId, data) => {
        try{
            const response = await axios.put(`${BASE_URL}/inventory/${itemId}`, data)
            return response
        }
        catch(error){
            console.error('Error updating data:', error);
            throw error;
        }
    }
</script>

<style>
@import './AddItemForm.module.scss';
</style>