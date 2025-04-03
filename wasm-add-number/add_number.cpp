#include <iostream>
#include <thread>
#include <vector>
#include <emscripten.h>

const int CHUNK_SIZE = 8;
const int NUM_THREADS = 4;
const int TOTAL_NUMBERS = 32;

int partial_sums[NUM_THREADS] = {0};

void sum_chunk(const std::vector<int>& numbers, int start_idx, int thread_id) {
    int sum = 0;
    for (int i = 0; i < CHUNK_SIZE; ++i) {
        sum += numbers[start_idx + i];
    }
    partial_sums[thread_id] = sum;
}

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int compute_sum() {
        std::vector<int> numbers(TOTAL_NUMBERS);
        for (int i = 0; i < TOTAL_NUMBERS; ++i) {
            numbers[i] = i + 1;
        }

        std::vector<std::thread> threads;
        
        for (int i = 0; i < NUM_THREADS; ++i) {
            threads.emplace_back(sum_chunk, std::ref(numbers), i * CHUNK_SIZE, i);
        }

        for (auto& t : threads) {
            t.join();
        }

        int total_sum = 0;
        for (int i = 0; i < NUM_THREADS; ++i) {
            total_sum += partial_sums[i];
        }

        return total_sum;
    }
}

int main() { return 0; } 
