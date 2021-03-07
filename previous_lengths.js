function previous_lengths(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}

var x = ["hello", "dojo", "awesome"];
console.log(previous_lengths(x));
