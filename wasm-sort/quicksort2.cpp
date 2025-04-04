#include <iostream>
#include <vector>

extern "C" {

// QuickSort for 2D array
void quicksort(int* arr, int low, int high, int numCols) {
    if (low < high) {
        int pivot = arr[high * numCols];  // First element of the last row
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (arr[j * numCols] < pivot) {  // Compare the first column
                i++;
                // Swap the entire row (i-th row and j-th row)
                for (int k = 0; k < numCols; k++) {
                    std::swap(arr[i * numCols + k], arr[j * numCols + k]);
                }
            }
        }

        // Swap the pivot row with the i-th row
        for (int k = 0; k < numCols; k++) {
            std::swap(arr[(i + 1) * numCols + k], arr[high * numCols + k]);
        }

        int pi = i + 1;

        quicksort(arr, low, pi - 1, numCols);
        quicksort(arr, pi + 1, high, numCols);
    }
}

// Exposed function to sort a 2D array (in-place) by the first column
void quicksort_js(int* arr, int rows, int cols) {
    quicksort(arr, 0, rows - 1, cols);
}

}
