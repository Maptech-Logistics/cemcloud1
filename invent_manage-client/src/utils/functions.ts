import { formatDistance, parseISO } from 'date-fns'

// Helper function to format the time difference
// export const formatTimeAgo = (lastUpdated: Date): string => {
//   const timeAgo = formatDistance(new Date(), lastUpdated, { addSuffix: true })
//   return timeAgo
// }

export const formatTimeAgo = (lastUpdated: string): string => {
  const parsedLastUpdated = parseISO(lastUpdated);
  const timeAgo = formatDistance(new Date(), parsedLastUpdated, { addSuffix: true });
  return timeAgo;
};


// sorting util function
export const sortColumn = (headName: string): void => {
  // Logic for sorting the table by the selected column
}

// filtering util function
