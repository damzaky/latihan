#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdio>

extern "C" {

// QuickSort for sorting based on a specific column (index)
void quicksort(int* arr, int* indices, int low, int high, int numCols, int targetCol, int rows) {
    if (low < high) {
        int pivotIdx = indices[high];
    
        if (pivotIdx < 0 || pivotIdx >= rows) {
            printf("Invalid pivot index: %d (high=%d, rows=%d)\n", pivotIdx, high, rows);
            return;
        }
    
        int pivot = arr[pivotIdx * numCols + targetCol];
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (indices[j] >= rows || indices[j] < 0) {
                std::cerr << "Invalid index: " << indices[j] << std::endl;
                return;
            }

            int idx = indices[j];
            int val = arr[idx * numCols + targetCol];
            if (val < pivot) {
                i++;
                std::swap(indices[i], indices[j]);
            }
            if (idx < 0 || idx >= rows) {
                printf("Out of bounds index: %d\n", idx);
                return;
            }
            

        }
        std::swap(indices[i + 1], indices[high]);
        int pi = i + 1;

        quicksort(arr, indices, low, pi - 1, numCols, targetCol, rows);
        quicksort(arr, indices, pi + 1, high, numCols, targetCol, rows);
    }
}

// Exposed function to sort based on a single column and return the sorted indices
void quicksort_js(int* arr, int* indices, int rows, int cols, int targetCol) {
    printf("rows=%d, cols=%d, targetCol=%d\n", rows, cols, targetCol);
    printf("sorting in wasm \n");
    quicksort(arr, indices, 0, rows - 1, cols, targetCol, rows);
}

}
