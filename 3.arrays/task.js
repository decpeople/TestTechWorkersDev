function compareArrays(arr1, arr2) {

    // Ваш код
    // arr1 = [45, 46]
    // arr2 = [45, 46]
    if (arr1.length !== arr2.length) {
        return false
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }


    return true; // boolean
}

function advancedFilter(arr) {
    let resultArr;
    // Ваш код

    result_v = arr.filter(function(arr1) {
        return arr1 > 0 && !(arr1 % 3)
    })
    resultArr = result_v.map(
        function(n) {
            return n * 10
        }
    )

    return resultArr; // array
}