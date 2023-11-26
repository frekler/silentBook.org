не мутирующий

Визуализация метода reduce
https://reduce.surge.sh/


```js
// .reduce() – "сворачивает" массив в результирующее значение

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log('REDUCE STARTED');
// const result = numbers.reduce((acc, cur) => {
//   console.log({ acc, cur });
//   return acc * cur;
// }, 2);
// console.log('REDUCE ENDED');
// console.log({ result });

// ====



// первые два параметра обязательы acc и cur




const symbolArray = ['a', 'a', 'b', 'a', 'f', 'g', 'b', 'f', 'e', 'z'];
const symbolCounter = symbolArray.reduce((acc, cur) => {
  console.log({ acc, cur });
  if (acc[cur]) acc[cur] = acc[cur] + 1;
  else acc[cur] = 1;
  return acc;
}, {});

console.log({ symbolCounter });


```