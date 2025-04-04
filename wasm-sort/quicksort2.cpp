#include <iostream>
#include <vector>
#include <algorithm>

extern "C" {

// QuickSort for sorting based on a specific column (index)
void quicksort(int* arr, int* indices, int low, int high, int numCols, int targetCol) {
    if (low < high) {
        int pivot = arr[indices[high] * numCols + targetCol];
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (arr[indices[j] * numCols + targetCol] < pivot) {
                i++;
                std::swap(indices[i], indices[j]);
            }
        }
        std::swap(indices[i + 1], indices[high]);
        int pi = i + 1;

        quicksort(arr, indices, low, pi - 1, numCols, targetCol);
        quicksort(arr, indices, pi + 1, high, numCols, targetCol);
    }
}

// Exposed function to sort based on a single column and return the sorted indices
void quicksort_js(int* arr, int* indices, int rows, int cols, int targetCol) {
    quicksort(arr, indices, 0, rows - 1, cols, targetCol);
}

}
