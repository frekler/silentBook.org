```js
const arr = ['a', 'b', 'c', 'd', 'e', 'x', 99, 'z'];

// .some() — вызывает callback для каждого элемента массива.
// Если callback хотя бы для одного элемента вернет true, то весь метод вернет true

const hasNumber = arr.some((el) => typeof el === 'number');
console.log({ hasNumber, isArrayOfString });

```