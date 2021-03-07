function doubling(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

var x = [8, 12, 16];
console.log(doubling(x));