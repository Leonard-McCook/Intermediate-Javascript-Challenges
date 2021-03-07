function addseven(arr) {
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

var y = [7, 6, 5, 4];
console.log(addseven(y));