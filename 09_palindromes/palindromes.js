const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[.!, ]/g, "");
    let rev = str.split("").reverse();
    str = str.split("")
    if (str.length === rev.length) {
        return str.every((letter, index) => letter === rev[index]);
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
