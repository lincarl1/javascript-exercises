const removeFromArray = function (array, ...args) {
    let result_array = [];

    array.forEach(element => {
        if (!args.includes(element)) {
            result_array.push(element);
        }
    });

    return result_array;
};

// Do not edit below this line
module.exports = removeFromArray;
