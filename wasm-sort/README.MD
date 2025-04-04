```
emcc quicksort.cpp -O3 -s WASM=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper']" -s EXPORTED_RUNTIME_METHODS="['cwrap']" -o public/quicksort.js
emcc quicksort.cpp -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap']" -o public/quicksort.js
emcc quicksort.cpp -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap']" -o public/quicksort.js
emcc quicksort.cpp -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap', 'getValue', 'setValue', 'allocate', 'intArrayFromString', 'intArrayToString']" -o public/quicksort.js
emcc quicksort.cpp -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap']" -o public/quicksort.js


node index.js
```