const reverseString = function(string) {
    let array = string.split("");
    let reversed = "";
    for(let i = array.length - 1; i >= 0; i--) {
        reversed += array[i];
    }
    return reversed;
    // OR return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
