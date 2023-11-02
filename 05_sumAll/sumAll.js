const sumAll = function(first_number, second_number) {
    // Set Variables
    let lower = 0;
    let upper = 0;
    let result = 0;

    // Type Check
    if (!Number.isInteger(first_number) || !Number.isInteger(second_number))
    {
        return 'ERROR';
    }

    // Negative Number Check
    if (first_number < 0 || second_number < 0)
    {
        return 'ERROR';
    }

    // Check Lower And Upper Number
    if(first_number <= second_number)
    {
        lower = first_number;
        upper = second_number;
    }
    else
    {
        lower = second_number;
        upper = first_number;
    }

    for (let i = lower; i <= upper; i++)
    {
        result += i;
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
