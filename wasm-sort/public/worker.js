// worker.js
self.onmessage = function (e) {
    const { data, sortColumn } = e.data;

    quickSortIterative(data, sortColumn);
    self.postMessage(data); // Send back the sorted chunk
};

function quickSortIterative(arr, sortColumn) {
    const stack = [[0, arr.length - 1]];

    while (stack.length) {
        const [left, right] = stack.pop();
        if (left >= right) continue;

        const pivotIndex = partition(arr, left, right, sortColumn);

        stack.push([left, pivotIndex - 1]);
        stack.push([pivotIndex + 1, right]);
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
    if (column === 0) return rowA[0] <= rowB[0];
    if (column === 1) return rowA[1] <= rowB[1];
    return rowA[2].localeCompare(rowB[2]) <= 0;
}
