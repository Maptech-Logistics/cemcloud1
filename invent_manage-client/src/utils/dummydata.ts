import type { TableData } from '@/types/types'

export const headers = [
  'Index',
  'Name',
  'Batch Number',
  'Quantity',
  'Status',
  'Category',
  'Storage Location',
  'Date Modified',
  'Unit Cost',
  'Actions'
]




export const dummyData: TableData[] =[
  {
    name: 'Apples',
    batch_number: 'A123',
    quantity: 100,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'A1',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 0.5
    // buttons: EditIcon
  }, 
  {
    name: 'Oranges',
    batch_number: 'A124',
    quantity: 150,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'A2',
    last_updated: new Date('2023-07-12'),
    cost_per_unit: 0.6
    // buttons: EditIcon
  }, 
  {
    name: 'Grapes',
    batch_number: 'A125',
    quantity: 200,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'A3',
    last_updated: new Date('2023-07-13'),
    cost_per_unit: 0.7
    // buttons: EditIcon
  }, 
  {
    name: 'Pears',
    batch_number: 'A126',
    quantity: 250,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'A4',
    last_updated: new Date('2023-07-14'),
    cost_per_unit: 0.8
    // buttons: EditIcon
  },
  {
    name: 'Watermelons',
    batch_number: 'A127',
    quantity: 300,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'A5',
    last_updated: new Date('2023-07-15'),
    cost_per_unit: 0.9
    // buttons: EditIcon
  },
  {
    name: 'Bananas',
    batch_number: 'B456',
    quantity: 75,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'B3',
    last_updated: new Date('2023-07-10'),
    cost_per_unit: 0.3
    // buttons: "Edit,Delete"
  },
  {
    name: 'Milk',
    batch_number: 'C789',
    quantity: 50,
    status: 'in-stock',
    category: 'Dairy',
    shelf_location: 'C2',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 1.2
    // buttons: "Edit,Delete"
  },
  {
    name: 'Bread',
    batch_number: 'D012',
    quantity: 25,
    status: 'in-stock',
    category: 'Bakery',
    shelf_location: 'D4',
    last_updated: new Date('2023-07-09'),
    cost_per_unit: 2.5
    // buttons: "Edit,Delete"
  },
  {
    name: 'Cereal',
    batch_number: 'E345',
    quantity: 15,
    status: 'in-stock',
    category: 'Breakfast',
    shelf_location: 'E1',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 3.0
    // buttons: "Edit,Delete"
  },
  {
    name: 'Water Bottles',
    batch_number: 'F678',
    quantity: 50,
    status: 'in-stock',
    category: 'Beverages',
    shelf_location: 'F2',
    last_updated: new Date('2023-07-10'),
    cost_per_unit: 0.8
    // buttons: "Edit,Delete"
  },
  {
    name: 'Paper Towels',
    batch_number: 'G901',
    quantity: 20,
    status: 'in-stock',
    category: 'Household',
    shelf_location: 'G3',
    last_updated: new Date('2023-07-09'),
    cost_per_unit: 1.5
    // buttons: "Edit,Delete"
  },
  {
    name: 'Toothpaste',
    batch_number: 'H234',
    quantity: 10,
    status: 'in-stock',
    category: 'Personal Care',
    shelf_location: 'H2',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 2.0
    // buttons: "Edit,Delete"
  },
  {
    name: 'Strawberries',
    batch_number: 'I567',
    quantity: 350,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'I6',
    last_updated: new Date('2023-07-16'),
    cost_per_unit: 1.0
    // buttons: EditIcon
  },
  {
    name: 'Blueberries',
    batch_number: 'J890',
    quantity: 400,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'J7',
    last_updated: new Date('2023-07-17'),
    cost_per_unit: 1.1
    // buttons: EditIcon
  }
  ,
  {
    name: 'Toothpaste',
    batch_number: 'H234',
    quantity: 10,
    status: 'in-stock',
    category: 'Personal Care',
    shelf_location: 'H2',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 2.0
    // buttons: "Edit,Delete"
  },
  {
    name: 'Strawberries',
    batch_number: 'I567',
    quantity: 350,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'I6',
    last_updated: new Date('2023-07-16'),
    cost_per_unit: 1.0
    // buttons: EditIcon
  },
  {
    name: 'Blueberries',
    batch_number: 'J890',
    quantity: 400,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'J7',
    last_updated: new Date('2023-07-17'),
    cost_per_unit: 1.1
    // buttons: EditIcon
  },
  {
    name: 'Toothpaste',
    batch_number: 'H234',
    quantity: 10,
    status: 'in-stock',
    category: 'Personal Care',
    shelf_location: 'H2',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 2.0
    // buttons: "Edit,Delete"
  },
  {
    name: 'Strawberries',
    batch_number: 'I567',
    quantity: 350,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'I6',
    last_updated: new Date('2023-07-16'),
    cost_per_unit: 1.0
    // buttons: EditIcon
  },
  {
    name: 'Blueberries',
    batch_number: 'J890',
    quantity: 400,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'J7',
    last_updated: new Date('2023-07-17'),
    cost_per_unit: 1.1
    // buttons: EditIcon
  },
  {
    name: 'Toothpaste',
    batch_number: 'H234',
    quantity: 10,
    status: 'in-stock',
    category: 'Personal Care',
    shelf_location: 'H2',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 2.0
    // buttons: "Edit,Delete"
  },
  {
    name: 'Strawberries',
    batch_number: 'I567',
    quantity: 350,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'I6',
    last_updated: new Date('2023-07-16'),
    cost_per_unit: 1.0
    // buttons: EditIcon
  },
  {
    name: 'Blueberries',
    batch_number: 'J890',
    quantity: 400,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'J7',
    last_updated: new Date('2023-07-17'),
    cost_per_unit: 1.1
    // buttons: EditIcon
  },
  {
    name: 'Toothpaste',
    batch_number: 'H234',
    quantity: 10,
    status: 'in-stock',
    category: 'Personal Care',
    shelf_location: 'H2',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 2.0
    // buttons: "Edit,Delete"
  },
  {
    name: 'Strawberries',
    batch_number: 'I567',
    quantity: 350,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'I6',
    last_updated: new Date('2023-07-16'),
    cost_per_unit: 1.0
    // buttons: EditIcon
  },
  {
    name: 'Blueberries',
    batch_number: 'J890',
    quantity: 400,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'J7',
    last_updated: new Date('2023-07-17'),
    cost_per_unit: 1.1
    // buttons: EditIcon
  },
  {
    name: 'Toothpaste',
    batch_number: 'H234',
    quantity: 10,
    status: 'in-stock',
    category: 'Personal Care',
    shelf_location: 'H2',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 2.0
    // buttons: "Edit,Delete"
  },
  {
    name: 'Strawberries',
    batch_number: 'I567',
    quantity: 350,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'I6',
    last_updated: new Date('2023-07-16'),
    cost_per_unit: 1.0
    // buttons: EditIcon
  },
  {
    name: 'Blueberries',
    batch_number: 'J890',
    quantity: 400,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'J7',
    last_updated: new Date('2023-07-17'),
    cost_per_unit: 1.1
    // buttons: EditIcon
  },
  {
    name: 'Toothpaste',
    batch_number: 'H234',
    quantity: 10,
    status: 'in-stock',
    category: 'Personal Care',
    shelf_location: 'H2',
    last_updated: new Date('2023-07-11'),
    cost_per_unit: 2.0
    // buttons: "Edit,Delete"
  },
  {
    name: 'Strawberries',
    batch_number: 'I567',
    quantity: 350,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'I6',
    last_updated: new Date('2023-07-16'),
    cost_per_unit: 1.0
    // buttons: EditIcon
  },
  {
    name: 'Blueberries',
    batch_number: 'J890',
    quantity: 400,
    status: 'in-stock',
    category: 'Fruits',
    shelf_location: 'J7',
    last_updated: new Date('2023-07-17'),
    cost_per_unit: 1.1
    // buttons: EditIcon
  }
];


