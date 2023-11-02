const repeatString = function(word, timesToRepeat) {
    if (timesToRepeat < 0) return "ERROR";

    let string = "";
    for (let i = 0; i < timesToRepeat; i++)
    {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
