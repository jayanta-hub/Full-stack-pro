let chars = ['A', 'B', 'A', 'C', 'B','C'];
// chars.push("B")

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);
// console.log(chars);


// console.log(chars.indexOf("A"))