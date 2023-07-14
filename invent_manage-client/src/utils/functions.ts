import { formatDistance } from 'date-fns'
import type { TableData } from '@/types/types'

// Helper function to format the time difference
export const formatTimeAgo = (lastUpdated: Date): string => {
  const timeAgo = formatDistance(new Date(), lastUpdated, { addSuffix: true })
  return timeAgo
}

// sorting util function
export const sortTableData = (column: string, data: TableData[], sortOrder: 'asc' | 'desc'): TableData[] => {
  return data.sort((a, b) => {
    const aValue = a[column]
    const bValue = b[column]

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    } else {
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue
    }
  })
}

// filtering util function
