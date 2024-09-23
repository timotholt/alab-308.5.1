console.log(`hello world`);

// Part 1
// Take an array of numbers and return the sum.

function sumArray(array) {
    let sum = 0;
    for (i = sum = 0; i < array.length; i++)
        sum += array[i];

    return (sum);
}

// Take an array of numbers and return the average.
function avgArray(array) {
    let avg;

    if (array.length) {
        avg = sumArray(array) / array.length;
    }
    else {
        console.log(`array isn't complete, invalid, or wrong length`);
    }
    return (avg);
}

// Take an array of strings and return the longest string.
function longestStringInArray(array) {
    let index = -1;
    let maxlength = -1;

    if (array.length) {
        
        for (let i = 0; i < array.length; i++)
            if (typeof array[i] === 'string')
                if (array[i].length > maxlength) {
                    maxlength = array[i].length;
                    index = i;
                }
    }
    else {
        console.log(`array isn't complete, invalid, or wrong length`);
    }

    if (index < 0) {
        console.log(`no strings found in array`);
        return ('');
    } else {
        return (array[index]);
    }
}

// Take an array of strings, and a number and return an array
// of the strings that are longer than the given number. 
function arrayStringsLongerThanN(array, longerThan) {
    let outputArray = [];

    if (array.length) {   
        for (let i = 0; i < array.length; i++)
            if (typeof array[i] === 'string')
                if (array[i].length > longerThan)
                    outputArray.push(array[i]);
    }
    else {
        console.log(`array isn't complete, invalid, or wrong length`);
    }

    if (!outputArray.length > 0) {
        console.log(`no strings found in array`);
    }
    return (outputArray);
}

// Test recursion part 1
function recursivePrintN(n) {
    if (n >= 1) {
        recursivePrintN(n - 1);
        console.log(`n = ${n}`);
    }
}

// Test numbers part 1
const numArray_p1 = [ 22, 44, 66, 101, 23, 1, -2];
console.log(`Sum of array ${numArray_p1} = ${sumArray(numArray_p1)}`);
console.log(`Avg of array ${numArray_p1} = (${sumArray(numArray_p1)} / ${numArray_p1.length}) = ${avgArray(numArray_p1)}`);

// Test strings part 1
const stringArray_p1 = [
    `1`,
    `22`,
    `333`,
    `4444`,
    `55555`,
    `666666`,
    `7777777`
];
const longerThan_p1 = 3;
console.log(`Longest string in ${stringArray_p1} = ${longestStringInArray(stringArray_p1)}`);
console.log(`Strings longer than ${longerThan_p1} characters in ${stringArray_p1} = ${arrayStringsLongerThanN(stringArray_p1, longerThan_p1)}`);

// Test recursion
console.log(`this should result in no printing`);
recursivePrintN(-1);
console.log(`this should result in no printing`);
recursivePrintN(0);
console.log(`this should result in just the #1`);
recursivePrintN(1);
console.log(`this should result in printing 1-7`);
recursivePrintN(7);
console.log(`this should result in printing 1-11`);
recursivePrintN(11);

// End of message
console.log(`goodbye world`);