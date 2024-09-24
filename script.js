console.log(`hello world from alab308.5.1`);

//============================================================================
// This helper function outputs the person object or array of objects to
// the console.
//============================================================================
function displayPersonType(unknownObject) {
    let seperator = '';

    // helper function has a helper function to display a single object
    function displayPerson(obj, header = '') {
        let jobOrOccupation = 'occupation';
        let jobOrOccupationValue = obj.occupation;

        if (header.length > 0)
            seperator = ': ';
        if (obj.job) {
            jobOrOccupation = 'job';
            jobOrOccupationValue = obj.job;
        }

        if (obj.updated_at)
            console.log(`${header}${seperator}{ id: ${obj.id} name: ${obj.name} ${jobOrOccupation}: ${jobOrOccupationValue} age: ${obj.age} updated_at: ${obj.updated_at}}`);
        else
            console.log(`${header}${seperator}{ id: ${obj.id} name: ${obj.name} ${jobOrOccupation}: ${jobOrOccupationValue} age: ${obj.age}}`);
    };

    // If the unknown passed was an 
    if (Array.isArray(unknownObject)) {
        for (let i = 0; i < unknownObject.length; i++)
            displayPerson(unknownObject[i], i.toString());    
    } else if (typeof unknownObject === 'object')
        displayPerson(unknownObject);
}

//===============================================
// Part 1
//===============================================

console.log(`=== part 1 ===`);

// Take an array of numbers and return the sum.
function sumArray(array) {
    let sum = NaN;

    if (array.length)
        for (i = sum = 0; i < array.length; i++)
            sum += array[i];
    else
        console.log(`array isn't complete, invalid, or wrong length`);

    return (sum);
}

// Take an array of numbers and return the average.
function avgArray(array) {
    let avg = NaN;

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
console.log(`Sum of array [${numArray_p1}] = ${sumArray(numArray_p1)}`);
console.log(`Avg of array [${numArray_p1}] = (${sumArray(numArray_p1)} / ${numArray_p1.length}) = ${avgArray(numArray_p1)}`);

// Test strings part 1
const stringArrayv1_p1 = [
    `1`,
    `22`,
    `333`,
    `4444`,
    `55555`,
    `666666`,
    `7777777`
];
const stringArrayv2_p1 = [
    'say', 'hello', 'in', 'the', 'morning'
];

const longerThan_p1 = 3;
console.log(`Longest string in ${stringArrayv1_p1} = ${longestStringInArray(stringArrayv1_p1)}`);
console.log(`Longest string in ${stringArrayv2_p1} = ${longestStringInArray(stringArrayv2_p1)}`);

console.log(`Strings longer than ${longerThan_p1} characters in ${stringArrayv1_p1} = ${arrayStringsLongerThanN(stringArrayv1_p1, longerThan_p1)}`);
console.log(`Strings longer than ${longerThan_p1} characters in ${stringArrayv2_p1} = ${arrayStringsLongerThanN(stringArrayv2_p1, longerThan_p1)}`);

// Test recursion
console.log(`This should result in no numbers printing`);
recursivePrintN(-1);
console.log(`This should result in no numbers printing`);
recursivePrintN(0);
console.log(`This should result in just printing the #1`);
recursivePrintN(1);
console.log(`This should result in printing 1-7`);
recursivePrintN(7);
console.log(`This should result in printing 1-11`);
recursivePrintN(11);

//===============================================
// Part 2
//===============================================

console.log(`=== part 2 ===`);

// Test data from the assignment
const part2TestData = 
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

debugger;

// Display test data
console.log(`Part 2 Test Data is:`)
displayPersonType(part2TestData);

// Sort array by age and display it
const sortedPart2TestData = [...part2TestData];
sortedPart2TestData.sort((a, b) => a.age - b.age); 
console.log(`Part 2 Test Data, sorted by age is:`)
displayPersonType(sortedPart2TestData);

// Filter the array and remove all entries > 50
const filteredPart2TestData = sortedPart2TestData.filter(a => a.age <= 50); 
console.log(`Part 2 Test Data, all ages over 50 removed:`)
displayPersonType(filteredPart2TestData);

// Using map, make a new array with key name 'occupation'
// changed to 'job' and bump the age by 1
function mapProcess(obj) {
    let newObject = {};
    newObject.id = obj.id;
    newObject.name = obj.name;
    newObject.job = obj.occupation;
    newObject.age = (Number(obj.age) + 1).toString();
    return newObject;
}
const mappedPart2TestData = filteredPart2TestData.map(mapProcess);
console.log(`Part 2 Test Data, mapped and filtered to change key:occupation key:job and add 1 to the age`);
displayPersonType(mappedPart2TestData);

// Use the reduce method to calculate the sum of the ages.
function reduceProcess(total,p) {
    return total + Number(p.age);
}
const sumAgeOfPeople = mappedPart2TestData.reduce(reduceProcess,0);
console.log(`The sum of the ages = ${sumAgeOfPeople}`);

// Calculate the average age
const numPeople = mappedPart2TestData.length;
const averageAge = (sumAgeOfPeople / numPeople).toFixed(3);
console.log(`The average age (rounded to 3 decimals) = (${sumAgeOfPeople} / ${numPeople} ) = ${averageAge}`);

//===============================================
// Part 3
//===============================================

console.log(`=== part 3 ===`);

// Take an object and increment its age field.
function incrementAgeByReference(obj) {

    // Get current date
    let date = Date();

    // Check to see if it has an age key is missing
    if (!("age" in obj)) {

        // Doesn't exist, add it, initialize it to zero
        obj.age = 0;
    }
    else {
        let age = Number(obj.age);
        age++;
        obj.age = age.toString();
    }

    // Mark that the age is updated
    obj.updated_at = date;

    // Return the object
    return (obj);
}

// Take an object and increment its age field and return a new object
function incrementAgeByValue(obj) {

    // Make a shallow copy of the object
    let newObj = { ... obj };

    // Call the old incrementAgeByReference function
    return(incrementAgeByReference(newObj));
}

// Copy the output of part 2 and make it the basis for part 3
const part3TestData = [...mappedPart2TestData];
const part3TestDataByReference = [...part3TestData];

// Test incrementAgeByReference
console.log(`Part 3 test data (before pass by reference)`);
displayPersonType(part3TestData);

// Increment all ages in the test data by reference
for (let i = 0; i < part3TestDataByReference.length; i++)
    incrementAgeByReference(part3TestDataByReference[i]);

console.log(`Part 3 test data after incrementing age by reference:`);
displayPersonType(part3TestDataByReference);

//=============================
let part3TestDataByValue = [];

console.log(`Part 3 Pass By Value Blank result:`);
displayPersonType(part3TestDataByValue);

for (let i = 0; i < part3TestDataByReference.length; i++)
    part3TestDataByValue[i] = incrementAgeByValue(part3TestDataByReference[i]);

console.log(`Part 3 Pass By Value Filled Result:`);
displayPersonType(part3TestDataByValue);

// End of message
console.log(`goodbye world from alab308.5.1`);


