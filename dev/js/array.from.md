Array.from


console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


const generateNames = (num) => {
    return Array.from({ length: num}, () => randomProfile.name());
}
console.log(generateNames(3));


<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from>