не мутирующий

чтобы из массива получить подмассив
возвращает новый массив (кусок массива)

принимает начальный и конечные индексы
конечный не входит в новый массив
возвращает новый подмассив




```js
const dartVader = ['luke', 'i', 'am'];
const slicedDartVader = dartVader.slice(2, 4);
console.log({})
// dartVader [luke, i, am]
// slicedDart.. [am, your]
```


часто используется для поверхностного копирования массива


```js

// .slice() — возвращает новый массив (косок массива)

// const darthVader = ['luke', 'i', 'am', 'your', 'father'];
// const slicedDarthVader = darthVader.slice(2, 4);
// console.log({ darthVader, slicedDarthVader });

// Также часто используется для поверхностного копирования массива
// const copiedDarthVader = darthVader.slice();
// console.log({ darthVader, copiedDarthVader });
// console.log('РЕЗУЛЬТАТ СРАВНЕНИЯ:', copiedDarthVader === darthVader); // false

// т.о. эти два массива ссылаются на разные ячейки в памяти и друг с другом не связаны никаким образом

```