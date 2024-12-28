const removeFromArray = function (array, ...args) {


    for (let argument of args) {
        let position = array.indexOf(argument);

        array.splice(position, 1);
    }


    // console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
