const removeFromArray = function (array, ...args) {

    let removalArr = [];

    for (let i = 0; i < array.length; i++) {

        for (let argument of args) {
            if (array[i] === argument) {
                removalArr.push(array.indexOf(argument));
            }
        }
    }

    while (removalArr.length > 0) {
        array.splice(removalArr.pop(), 1);
    }


    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
