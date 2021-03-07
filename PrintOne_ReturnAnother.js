function PrintOneReturn(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
}

var z = [7, 11, 14, 17, 4, 8];
console.log(PrintOneReturn(z));
