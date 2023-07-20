import { defineStore } from 'pinia';

interface InventoryItem {
  id: string;
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
        acc[item.id] = item;
        return acc;
      }, {} as Record<string, InventoryItem>);
      this.inventoryCount = Object.keys(this.inventory).length;
    },
    addInventory (inventoryItem: InventoryItem) {
      this.inventory[inventoryItem.id] = inventoryItem;
      this.inventoryCount++;
      //only increment if the item is not already in the inventory
    },
  },
});
