onmessage = function(e) {
    const { rows, sortColumn } = e.data;

    // Adjust the sorting based on the column
    function quickSort(arr) {
        if (arr.length <= 1) return arr;
        
        // Use the column index to determine how to compare the rows
        const pivot = arr[arr.length - 1];
        const left = arr.slice(0, -1).filter(row => {
            // Compare based on the chosen column
            if (sortColumn === 1) {
                // Column 1 is the random integer, parse as integer
                return parseInt(row.randomInt) <= parseInt(pivot.randomInt);
            } else if (sortColumn === 0) {
                // Column 0 is the index, parse as integer
                return parseInt(row.index) <= parseInt(pivot.index);
            } else {
                // Column 2 is the color combination, use lexicographical comparison
                return row.colors <= pivot.colors;
            }
        });

        const right = arr.slice(0, -1).filter(row => {
            if (sortColumn === 1) {
                return parseInt(row.randomInt) > parseInt(pivot.randomInt);
            } else if (sortColumn === 0) {
                return parseInt(row.index) > parseInt(pivot.index);
            } else {
                return row.colors > pivot.colors;
            }
        });

        return [...quickSort(left), pivot, ...quickSort(right)];
    }

    // Sort the rows using the quickSort function
    const sortedRows = quickSort(rows);

    // Return the sorted rows back to the main thread
    postMessage(sortedRows);
}
