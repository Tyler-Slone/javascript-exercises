const removeFromArray = function(array, ...args) {

  const newArray = [];

  array.forEach((instance) => {

    if (!args.includes(instance)) {
      newArray.push(instance);
    }

  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
