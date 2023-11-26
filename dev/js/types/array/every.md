```js
const arr = ['a', 'b', 'c', 'd', 'e', 'x', 99, 'z'];

// .every() — вызывает callback для каждого элемента массива.
// Если callback хотя бы для одного элемента вернет false, то весь метод вернет false

const isArrayOfString = arr.every((el) => typeof el === 'string'); // false

```