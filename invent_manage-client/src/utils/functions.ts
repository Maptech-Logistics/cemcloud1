import { formatDistance } from 'date-fns'

// Helper function to format the time difference
export const formatTimeAgo = (lastUpdated: Date): string => {
  const timeAgo = formatDistance(new Date(), lastUpdated, { addSuffix: true })
  return timeAgo
}

// sorting util function

// filtering util function
