function bubbleSort(array) {
    for (var a = array.length-1; a > 0 ; a--) {
        for (var b = 0; b < a; b++ ) {
            if (array[b] > array[b+1]) {
                var temp = array[b];
                array[b] = array[b+1];
                array[b+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  