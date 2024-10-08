const sumAll = function(min, max) {
    // Error handling
    if (min < 0 || max < 0){
        return 'ERROR'
    };

    if (!Number.isInteger(min) || !Number.isInteger(max)){
        return 'ERROR'
    }

    // Fix swapped min and max values
    if (min > max){
        max = max + min;
        min = max - min;
        max = max - min;
    };

    // Sum all integers between min and max
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
