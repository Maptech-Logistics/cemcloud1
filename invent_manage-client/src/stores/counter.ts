// import { th } from 'date-fns/locale'
// import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'


// export const useInventoryStore = defineStore('inventory',  {
//   state: () => ({
//     // try modifying inventory to be a dictionary
//     inventory: [] as InventoryItem[],
//     // inventory: {},
//     inventoryCount: 0,
//   }),
//   getters: {
//     getInventoryIds: (state) => { 
//       state.inventory
//     },
//     getInventoryIdCount: (state) => {
//       state.inventoryCount
//     }
//   },
//   actions: {
//     // can do async in here
//     setInventory(state: { inventory: any }, inventory: any) {
//       state.inventory = inventory
//       this.inventoryCount += inventory.length
//     },
//     addInventory(inventoryItem: InventoryItem) {
//       // this.inventory.push(inventoryItem)
//       this.inventory.push(inventoryItem)
//       this.inventoryCount++
//     }
//   }
// })

// interface InventoryItem {
//   name: string;
//   category: string;
// }

import { defineStore } from 'pinia';

interface InventoryItem {
  name: string;
  category: string;
  // ... other properties
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
    addInventory(inventoryItem: InventoryItem) {
      this.inventory[inventoryItem.name] = inventoryItem;
      this.inventoryCount++;
      //only increment if the item is not already in the inventory
      // deal with setting it to only category later

      
      // if (!this.inventory.hasOwnProperty(inventoryItem.name)) {
      //   this.incrementInventoryCount();
      // }
    },
    // incrementInventoryCount() {
    //   this.inventoryCount++;
    // }
  },
});
