const findTheOldest = function (array) {

    for (item of array) {
        item.age = item.yearOfDeath - item.yearOfBirth;
        if (!item.yearOfDeath) {
            item.age = new Date().getFullYear() - item.yearOfBirth;
        }
    }

    const sorted = array.sort((a, b) => a.age > b.age ? -1 : 1);

    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
