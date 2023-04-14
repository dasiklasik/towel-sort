module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }

    const res = []

    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(i%2 === 0) {
                res.push(matrix[i][j])
            } else {
                res.push(matrix[i][matrix[i].length - 1 - j])
            }
        }
    }

    return res
}
