function solveEquation(a, b, c) {
    let arr = b * b - 4 * a * c
    if (arr < 0) {
        let temp = []
        arr = temp
    } else if (arr == 0) {
        let temp = []
        temp.push(-b / (2 * a))
        arr = temp
    } else if (arr > 0) {
        let temp1 = []
        temp1.push((-b + Math.sqrt(arr)) / (2 * a));
        temp1.push((-b - Math.sqrt(arr)) / (2 * a));
        arr = temp1
    }
    return arr; // array
}