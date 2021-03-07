var array = [true, 42, "Ada", 2, "pizza"];
var nums = [1, 2, 3, 4, 5, 6];
function swapTowardCenter(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    var temp2 = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2;
    return arr;
}
console.log(swapTowardCenter(array));
console.log(swapTowardCenter(nums));