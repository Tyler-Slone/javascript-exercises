const removeFromArray = function(array, remove) {
    if (array.includes(remove)){

        // Find index of argument to remove
        let index = array.indexOf(remove);

        // Remove argument at index
        array.splice(index, 1);
        
        return array;
    } else {
        return 'Argument not found.';
    }
};

// Do not edit below this line
module.exports = removeFromArray;
