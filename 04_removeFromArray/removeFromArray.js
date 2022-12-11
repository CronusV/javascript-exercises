const removeFromArray = function(array, ...remove) {
    // This method modifies the array in place!
    // for(let i = 0; i < remove.length; i++) {
    //     if(array.includes(remove[i])) {
    //         let index = array.indexOf(remove[i]);
    //         array.splice(index,1);
    //     }
    
    // return array;

    // Another way, creates a new array
    return array.filter(val => !remove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
