function returnhigh(arr, n) {
    arr.sort();
    return arr[n - 1];
}

let arr = [112, 324, 24, 508];
let n = arr.length;
console.log(returnhigh(arr, n));
