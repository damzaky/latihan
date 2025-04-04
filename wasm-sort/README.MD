```
emcc quicksort.cpp -O3 -s WASM=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper']" -s EXPORTED_RUNTIME_METHODS="['cwrap']" -o public/quicksort.js
emcc quicksort.cpp -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap']" -o public/quicksort.js
emcc quicksort.cpp -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap']" -o public/quicksort.js
emcc quicksort.cpp -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap', 'getValue', 'setValue', 'allocate', 'intArrayFromString', 'intArrayToString']" -o public/quicksort.js
emcc quicksort.cpp -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_quickSortWrapper', '_malloc', '_free']" -s EXPORTED_RUNTIME_METHODS="['cwrap']" -o public/quicksort.js
emcc quicksort2.cpp -s EXPORTED_FUNCTIONS="['_quicksort_js', '_malloc', '_free']" -s MODULARIZE=1 -s EXPORT_NAME="createModule" -o public/quicksort2.js
emcc quicksort2.cpp -s EXPORTED_FUNCTIONS="['_quicksort_js', '_malloc', '_free']" -s MODULARIZE=1 -s EXPORT_NAME="createModule" -s ALLOW_MEMORY_GROWTH=1 -s INITIAL_MEMORY=512MB -s EXPORTED_RUNTIME_METHODS="['ccall', 'cwrap', 'setPrint']" -o public/quicksort2.js


node index.js
```