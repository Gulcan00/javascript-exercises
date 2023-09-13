const repeatString = function(string, count) {
    if (count === 0) {
        return "";
    }

    if (count < 0) {
        return "ERROR";
    }

    const temp = string;
    for(let i = 0; i < count-1; i++) {
        string += temp;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
