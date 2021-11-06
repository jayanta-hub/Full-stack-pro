// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

const prices = [200,300,350,400,450,500,600];

// // price < 400
const newPriceTag = prices.filter((elem, index) => {
  return index ;
})
console.log(newPriceTag);
