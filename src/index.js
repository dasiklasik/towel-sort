// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }

    let res = [];
    let partRes = [];
    let part = [];
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (counter === 0) {
            part = matrix[i];
            res = res.concat(part);
            counter++;
        } else if (counter === 1) {
            part = matrix[i].reverse();
            res = res.concat(part);
            counter = 0;
        }
    }
    return res;
}
