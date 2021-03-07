function negative(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(-Math.abs(arr[i]));
    }
    return newArr;
}

var y = [-2, -5, 7];
console.log(negative(y));
