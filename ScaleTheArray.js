function scale_array(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

var array = [2, 3, 5];
var number = 4;
console.log(scale_array(array, number));