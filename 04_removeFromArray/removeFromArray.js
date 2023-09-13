const removeFromArray = function(array, ...args) {
    for (let num of args) {
        const index = array.indexOf(num);
        if (index !== -1) { //If value is present in array
            if (index === 0) {
                array.shift();
            } else if (index === array.length -1) {
                array.pop();
            } else {
                array = array.slice(0, index).concat(array.slice(index + 1));
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
