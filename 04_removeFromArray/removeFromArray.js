const removeFromArray = function (array, ...args) {

    let removalArr = [];

    for (let i = 0; i < array.length; i++) { //Step through array

        for (let argument of args) {         //Step through arguments
            if (array[i] === argument) {    //If argument matches item add index to array
                removalArr.push(array.indexOf(argument)); //Add index to removal array
            }
        }
    }

    while (removalArr.length > 0) {         //Step through removal arr
        array.splice(removalArr.pop(), 1);  //Remove popped value from array
    }

    // console.log(array);
    // console.log(removalArr);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
// ([1, 2, 3, 4, 5, 6], 2, 4)