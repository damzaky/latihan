// quickSortWorker.js
self.onmessage = function(e) {
    const { data, sortColumn } = e.data;

    quickSort(data, 0, data.length - 1, sortColumn);
    self.postMessage(data);
};

function quickSort(arr, left, right, sortColumn) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right, sortColumn);
        quickSort(arr, left, pivotIndex - 1, sortColumn);
        quickSort(arr, pivotIndex + 1, right, sortColumn);
    }
}

function partition(arr, left, right, sortColumn) {
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
