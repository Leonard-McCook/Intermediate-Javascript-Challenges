function hungry(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
        }
        else {
            sum++;
        }
    }
    if (sum == arr.length) {
        console.log("I'm hungry");
    }
}

var x = [1, 2, 4, 6];
var y = [1, "food", 1, "food"];
hungry(x);
hungry(y);