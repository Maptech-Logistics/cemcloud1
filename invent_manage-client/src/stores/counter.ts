import { defineStore } from 'pinia';
import { watch } from 'vue';

interface InventoryItem {
  name: string;
  itemData: string;
  // change to category later
}

interface InventoryState {
  inventory: Record<string, InventoryItem>;
  inventoryCount: number;
}

export const useInventoryStore = defineStore('inventory', {
  state: (): InventoryState => ({
    inventory: {},
    inventoryCount: 0,
  }),
  getters: {
    getInventoryIds: (state) => Object.keys(state.inventory),
    getInventoryIdCount: (state) => state.inventoryCount,
  },
  actions: {
    setInventory(inventory: InventoryItem[]) {
      this.inventory = inventory.reduce((acc, item) => {
        acc[item.name] = item;
        return acc;
      }, {} as Record<string, InventoryItem>);
      this.inventoryCount = Object.keys(this.inventory).length;
    },
    addInventory (inventoryItem: InventoryItem) {
      const itemExists = Object.keys(this.inventory).includes(inventoryItem.name);
      if(!itemExists) {
        this.inventoryCount++;
      }
      this.inventory[inventoryItem.name] = inventoryItem;
    },
  },
});

watch(
  () => useInventoryStore().$state,
  (newState) => {
    localStorage.setItem('inventoryStore', JSON.stringify(newState));
  },
  { deep: true } // Watch nested properties of the state as well
);

const persistedState = JSON.parse(localStorage.getItem('inventoryStore') || '{}');
useInventoryStore().$state = persistedState


