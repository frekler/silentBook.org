first split for lines (\n)
then split all data in line

```js
const lines = str.split("\n");
const crew = lines.map((member) => member.split(", "));
```


не мутирует строку

метод строк!
результатом будет массив


разбивает строку на массив
аргументом принимает разделитель (delimiter)


```js
//====
//
// const anotherStr = 'hello world! bye world';
// const afterAnotherSplit = anotherStr.split('!');
// // // В массиве оказываются все символы исходной строки, кроме разделителя
// // // Например, в этом примере во втором элементе остается пробел в начале
// console.log({ afterAnotherSplit });



```