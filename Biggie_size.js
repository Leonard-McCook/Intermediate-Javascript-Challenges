function BiggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}

var x = [-7, 6, 8, -4];
console.log(BiggieSize(x));