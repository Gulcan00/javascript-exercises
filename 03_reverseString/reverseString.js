const reverseString = function(string) {
    const words = string.split(" ");
    const reverse = [];

    for (let word of words) {
        //Split word into array of characters
        letters = word.split("");

        //Reverse the characters then join add to array
        reverse.push(letters.reverse().join(""));
    }

    return reverse.reverse().join(" ");
};

// Do not edit below this line
module.exports = reverseString;
