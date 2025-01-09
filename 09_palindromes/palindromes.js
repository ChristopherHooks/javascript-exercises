const palindromes = function (string) {
    //convert string to array
    //letters only
    const cleanString = string
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    //reverse array
    const reverseString = cleanString.split('').reverse().join('');

    //compare 
    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
