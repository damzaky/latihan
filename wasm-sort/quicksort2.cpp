#include <iostream>
#include <vector>

extern "C" {

// QuickSort function (in-place sorting)
void quicksort(int* arr, int low, int high) {
    if (low < high) {
        int pivot = arr[high];
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                std::swap(arr[i], arr[j]);
            }
        }
        std::swap(arr[i + 1], arr[high]);
        int pi = i + 1;

        quicksort(arr, low, pi - 1);
        quicksort(arr, pi + 1, high);
    }
}

// Exposed C function to be called from JS
void quicksort_js(int* arr, int size) {
    quicksort(arr, 0, size - 1);
}

}
