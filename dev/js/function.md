```js
function foo(/* foo params */) {
/* function body */
}
foo(/* foo args */) // вызов foo
```

if no `return`, function returns `undefined`

стрелочная

```js
(/*params*/) => /*return*/
```

или

```js
((/*params*/) => /*return*/ ) (/*args*/);
```

```js
const foo = ((a, b) => a + b ) (3, 4);
console.log(foo); // 7
```

вложеннная

```js
function foo() {
    /* foo() start */
    function bar() {
        /* bar() start */
        function baz() {
            /* baz() start */
            /* baz() end */
        }
        /* bar() end */
    }
    bar()
    /* foo() end */
}

// Результат выполнения bar неизвестен, т.к. bar не вызывается, ведь мы не вызывали foo.
```



еще пример  

```js
function foo(a) {
  return (function (b) {
    return b;
  })(a);
}

foo(10);

// result foo = 10
// args foo = 10
// args of anonymous function = 10

```



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




<https://learn.javascript.ru/closure>

замыкание js


Anonymous Functions:

https://www.javascripttutorial.net/javascript-anonymous-functions/