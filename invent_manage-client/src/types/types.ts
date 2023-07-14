export type Link = {
  to: string
  icon: any
  text: string
}

export type TableData = {
  name: string
  batch_number: string
  quantity: number
  status: 'in-stock' | 'out-of-stock'
  category: string
  shelf_location: string
  last_updated: Date
  cost_per_unit: number
  buttons?: any
  [key: string]: any // Index signature to allow indexing with a string
}

