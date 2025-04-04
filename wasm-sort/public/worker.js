onmessage = function(e) {
    const { rows, sortColumn } = e.data;

    // Iterative QuickSort using a stack to avoid recursion depth issues
    function quickSortIterative(arr) {
        const stack = [];
        stack.push([0, arr.length - 1]); // Push the initial range onto the stack

        while (stack.length > 0) {
            const [low, high] = stack.pop();

            if (low < high) {
                // Partition the array and get the pivot index
                const pivotIndex = partition(arr, low, high);

                // Push the ranges to the stack
                stack.push([low, pivotIndex - 1]);
                stack.push([pivotIndex + 1, high]);
            }
        }

        return arr;
    }

    // Partition function for quickSort
    function partition(arr, low, high) {
        const pivot = arr[high];  // Take the last element as pivot
        let i = low - 1;  // Index of the smaller element

        for (let j = low; j < high; j++) {
            if (compareRows(arr[j], pivot, sortColumn)) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap
            }
        }

        // Swap the pivot with the element at i+1
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    // Comparison function for rows based on the column
    function compareRows(rowA, rowB, column) {
        if (column === 0) {
            return parseInt(rowA.index) <= parseInt(rowB.index);  // Column 0: index
        } else if (column === 1) {
            return parseInt(rowA.randomInt) <= parseInt(rowB.randomInt);  // Column 1: random integer
        } else {
            return rowA.colors.localeCompare(rowB.colors) <= 0;  // Column 2: color combination (lexicographical comparison)
        }
    }

    // Sort the rows using the iterative quickSort function
    const sortedRows = quickSortIterative(rows);

    // Return the sorted rows back to the main thread
    postMessage(sortedRows);
}
