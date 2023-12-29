не мутирующий (не меняет исходый массив)



ищет все элементы, на которых функция-колбэк вернет true


```js
// .filter() — возвращает новый массив, элементы которого удовлетворяют условию в callback функции

// const unfiltered = [1, 'hello', 3, 'world', 5, 'elbrus', 7, 8, 'bootcamp', 10];
//
// console.log('======== FILTER STARTED ========');
//
// const filtered = unfiltered.filter((el, index, initialArray) => {
//   console.log({ el, index, initialArray });
//   return typeof el === 'number';
// });
//
// console.log('======== FILTER ENDED ========');
//
// console.log({ unfiltered, filtered });

```



```js
let results = arr.filter(function (item, index, array) {
    // если true - элемент добавляется к результату, и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
}
```

```js
let arr = [
    { name: 'Вася', age: 36 },
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 'не скажу' },
]

let result = arr.filter(function (item, index, array) {
    return item.age >= 18;
});
console.log(result);    // новый массив из двух элементов {name Вася..., Коля}
```


```js
let newArr = arr.filter((el) => el > 10);
```

```js
// только четные значения массива
let numbers = [1, 4, 7, 2, 9, 10, 3, 6];
const evenNumbers = numbers.filter((el) => el % 2 === 0)
```


```js
// Как работает

function condition (el) {
  return el > 10
}

let newArr = arr4.filter(condition)
function myFilter(array, valerii) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (valerii(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
}
let newArr2 = myFilter(arr4, (el) => el > 10);
console.log(newArr2);
```