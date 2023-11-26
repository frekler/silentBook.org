https://jestjs.io/
https://jestjs.io/docs/using-matchers




index.js

```js
function func(arr, el) {
    arr.push(el);
    return arr;
}

module.exports = func;
```


index.test.js

```js
const func = require('./index')

describe('Функции для работы с массивами', () => {
    let testArr;
    beforeEach((), => {
        testArr = [1, 2, 3];
    });
    it('Позволяет добавить элемент в массив', () => {
        const newArr = func(testArr, 10)
        expect(newArr).toEqual([1, 2, 3, 10]);
    });
});

```