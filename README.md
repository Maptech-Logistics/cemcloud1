# cemcloud1


## Getting Started

**Sorting Functionality**
The sorting feature in the table allows users to sort the data displayed in the table based on the values of specific columns. It lets users easily organize and find the needed data by clicking on the table headers.

**Implementation**
The main components involved are `Table.vue` and `functions.ts`.

1. **Table.vue**
   - Props:
     - `headers`: An array of strings representing the table's column headers.
     - `body`: An array of objects representing the data to be displayed in the table.
     - `sortColumn`: A function to trigger sorting based on the selected column.

   - Data:
     - `col`: A reactive reference to keep track of the currently sorted column index.
     - `sortOrder`: A reactive reference to store the current sorting order ('asc' or 'desc').
     - `sortedData`: A computed property that returns the sorted data based on the selected column and sorting order.

   - Methods:
     - `setCol(index: number)`: Updates the `col` and `sortOrder` when a table header is clicked to trigger sorting.
     - `isSorted(headName: string)`: Checks if a column is currently sorted.
     - `getSortDirection(headName: string)`: Returns the appropriate CSS class for the arrow icon based on the sorting order.
     - `shouldShowArrow(headName: string)`: Determines whether to display an arrow icon for a particular column.

2. **functions.ts**
   - `sortColumn(column: string, data: TableData[], sortOrder: string): TableData[]`: Performs the actual sorting of the table data based on the specified column and sorting order.

**Sorting Process**
1. When a table header is clicked, the `setCol` method is called, which updates the `col` and `sortOrder` variables accordingly. This triggers the reactivity in the `sortedData` computed property.

2. The `sortedData` computed property calls the `sortColumn` function from `functions.ts` to perform the sorting. It passes the selected column name (`column`), the table data (`data`), and the sorting order (`sortOrder`).

3. The `sortColumn` function sorts the `data` array based on the specified `column` using JavaScript's `Array.prototype.sort()` method. It handles different data types and sorts them in ascending or descending order based on the `sortOrder`.

4. The sorted data is then displayed in the table, and the appropriate arrow icon is shown next to the sorted column header to indicate the sorting order.
