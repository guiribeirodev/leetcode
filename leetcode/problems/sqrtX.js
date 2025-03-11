/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let bot = 1
    let top = x;

    while (bot <= top){
        let middle = (top + bot) / 2 | 0;
        let squareRoot = middle * middle

        if (squareRoot == x){
            return middle
        }
        if (squareRoot < x){
            bot = middle + 1;
        } else {
            top = middle - 1;
        }
    }

    return bot - 1;
};