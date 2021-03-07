function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

var x = [0, 6, 4, 6, -2, -6];
console.log(incrementTheSeconds(x));