const sumAll = function (num1, num2) {
    let orig = num1;
    let end = num2;     //Set origin and end points
    let sum = 0;

    if (
        (num1 < 0 || num2 < 0) ||
        (num1 % 1 !== 0 || num2 % 1 !== 0) ||
        (num1 === NaN || num2 === NaN) ||
        (typeof num1 !== 'number' || typeof num2 !== 'number')
    ) {
        return 'ERROR';
    }

    if (orig < end) {
        for (let i = orig; i <= end; i++) {
            sum += i;
        }
    }

    else if (orig > end) {
        for (let i = orig; i >= end; i--) {
            sum += i;
        }
    }
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
