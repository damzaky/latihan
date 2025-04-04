#include <algorithm>
#include <emscripten.h>

extern "C" {
    void quickSort(int* arr, int left, int right) {
        if (left >= right) return;

        int pivot = arr[right];
        int i = left - 1;
        for (int j = left; j < right; j++) {
            if (arr[j] < pivot) {
                i++;
                std::swap(arr[i], arr[j]);
            }
        }
        std::swap(arr[i + 1], arr[right]);

        int pivotIndex = i + 1;
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    EMSCRIPTEN_KEEPALIVE
    void quickSortWrapper(int* arr, int len) {
        quickSort(arr, 0, len - 1); // Sort in-place
    }
}
