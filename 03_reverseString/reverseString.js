const reverseString = function (string) {
    let origString = [];
    origString = string.split('');

    let revString = [];
    let output = '';

    for (let i = 0; i < origString.length; i++) {
        revString.unshift(origString[i]);
    }

    for (let i = 0; i < revString.length; i++) {
        output += revString[i];
    }
    return output;
};


// Do not edit below this line
module.exports = reverseString;
