const reverseString = function(string) {
    string = string.split('');
    string = string.reverse();
    let reverseString = string.join('');
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
