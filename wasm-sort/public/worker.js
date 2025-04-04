// worker.js
self.onmessage = function(e) {
    const { data, sortColumn } = e.data;

    quickSortIterative(data, sortColumn);
    self.postMessage(data);
};

function quickSortIterative(arr, sortColumn) {
    const stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length > 0) {
        const right = stack.pop();
        const left = stack.pop();

        if (left >= right) continue;

        const pivotIndex = partition(arr, left, right, sortColumn);

        if (pivotIndex - 1 > left) {
            stack.push(left);
            stack.push(pivotIndex - 1);
        }
        if (pivotIndex + 1 < right) {
            stack.push(pivotIndex + 1);
            stack.push(right);
        }
    }
}

function partition(arr, left, right, sortColumn) {
    // Randomized pivot
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (compareRows(arr[j], pivot, sortColumn)) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

function compareRows(rowA, rowB, column) {
    if (column === 0) {
        return rowA[0] <= rowB[0];
    } else if (column === 1) {
        return rowA[1] <= rowB[1];
    } else {
        return rowA[2].localeCompare(rowB[2]) <= 0;
    }
}
