```js
function foo(a1, b2) {
    return a1 + b2;   //  результат выполнения функции
    console.log('hi'); // это уже мусорный код
}

console.log(foo()); // чтобы узнать, что вернула функция - вызови ее в консоли

// Аргументы у функций становятся чем-то конкретным ТОЛЬКО в момент её вызова
console.log(foo(2, 5));

const s = foo() + 7;
console.log(s);
```



```js
function start(num) {
     for (let i = num; i >= 1; i--) {
          console.log(i);
     }
     return 'Поехали!';
}

console.log(start(5));
```


