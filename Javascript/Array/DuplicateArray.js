// ***************1st method****************


let chars = ['A', 'B', 'A', ['C', 'B','C']];
// chars.push("B")
// let value = chars.flat(Infinity)

let uniqueChars = chars.flat(Infinity).filter((c, index) => {
    // console.log(c)
    return chars.flat(Infinity).indexOf(c) === index;
});

console.log(uniqueChars);
// console.log(chars);

// console.log(chars.indexOf("A"))

// let value = chars.flat(Infinity)
// console.log(value)
// console.log(chars.flat(Infinity))


// ***************2nd method****************
// 1) Remove duplicates from an array using a Set
// A Set is a collection of unique values. To remove duplicates from an array:

// First, convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.
// Then, convert the set back to an array.
// The following example uses a Set to remove duplicates from an array:
let array = ['A', 'B', 'A', ['C', 'B']];
debugger
let uniquearray = [...new Set(array.flat(Infinity))];

console.log(uniquearray);
// output
// [ 'A', 'B', 'C' ]


// 3) Remove duplicates from an array using forEach() and include()
// The include() returns true if an element is in an array or false if it is not.

// The following example iterates over elements of an array and adds to a new array only elements that are not already there:

let char = ['A', 'B', 'A', 'C', 'B'];

let uniqueChar = [];
char.forEach((c) => {
    if (!uniqueChar.includes(c)) {
        uniqueChar.push(c);
    }
});

console.log(uniqueChar);