мутирующий

```js
// .splice() — возвращает массив удаленных элементов. Мутирует. Вставляет элементы при необходимости

const jackSparrow = ['good', 'morning', 'mister', 'jack', 'sparrow'];
const deletedWords = jackSparrow.splice(1, 2, 'day', 'captain', 'jacky');
console.log({ jackSparrow, deletedWords });
```
2 - ограничитель



первый аргумент - обязательный