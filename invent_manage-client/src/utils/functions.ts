import { formatDistance, parseISO } from 'date-fns';
import type { TableData } from '@/types/types';

export const formatTimeAgo = (lastUpdated: string): string => {
  const parsedLastUpdated = parseISO(lastUpdated);
  const timeAgo = formatDistance(new Date(), parsedLastUpdated, { addSuffix: true });
  return timeAgo;
};

export const sortColumn = (column: string, data: TableData[], sortOrder: string): TableData[] => {
  const columnMap: Record<string, keyof TableData> = {
    name: 'name',
    'batch number': 'batch_number',
    quantity: 'quantity',
    status: 'status',
    category: 'category',
    'storage location': 'shelf_location',
    'date modified': 'last_updated',
    'unit cost': 'cost_per_unit',
  };

  const sortBy = columnMap[column];
  if (!sortBy) {
    console.error(`Invalid column name: ${column}`);
    return data;
  }

  const sortedData = [...data];

  sortedData.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB;
    }

    // Fallback to sorting by ID if the values are not string or number
    return a.id - b.id;
  });

  if (sortOrder === 'desc') {
    sortedData.reverse();
  }

  return sortedData;
};

//filtering util function
