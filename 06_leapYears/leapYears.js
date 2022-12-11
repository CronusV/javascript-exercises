const leapYears = function(year) {
    // If divisible by 4 then it's a leap year!
    if(year % 4 === 0) {
        if(year % 400 === 0) return true;
        if(year % 100 === 0) return false;
        return true;
    } else {
        return false;
    }
    // OR
    // return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
