/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let start = 0;
    let end = matrix.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        let current = matrix[middle];

        let startBlock = 0
        let endBlock = current.length - 1;

        if (target >= current[startBlock] && target <= current[endBlock]) {

            while (startBlock <= endBlock) {
                let middleBlock = Math.floor((startBlock + endBlock) / 2);
                let currentBlock = current[middleBlock]


                if (currentBlock == target) {
                    return true
                }
                if (currentBlock < target){
                    startBlock = middleBlock + 1
                } else {
                    endBlock = middleBlock - 1
                }
            }
            return false
        }
        if (current[endBlock] < target){
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return false
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let target = 13

searchMatrix(matrix, target)