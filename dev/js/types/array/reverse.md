мутирующий

```js
// ====
// .reverse() — переворачивает массив. Мутирует

const niceArray = [10, 100, 1000, 10000];

console.log('BEFORE REVERSE:', niceArray);
const returnedValue = niceArray.reverse(); // Лучше так не делать, используйте без присваивания в новую переменную
console.log('AFTER REVERSE:', niceArray);
console.log('RETURNED VALUE:', returnedValue);
console.log(returnedValue === niceArray); // Возвращаемое значение === исходный массив
```