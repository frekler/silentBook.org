<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt>



<https://blog.stackademic.com/javascript-how-to-remove-a-character-from-a-string-398e81f13617>

replace

```js
let string = "Hello, World!";
// Removing the comma
let newString = string.replace(',', '');
console.log(newString); // "Hello World!"
```

```js
let string = "Look at the moon!";
// Removing all 'o' characters
let newString = string.replace(/o/g, '');
console.log(newString); // "Lk at the mn!"
```

split


```js
let string = "Javascript is awesome!";
// Removing all spaces
let newString = string.split(' ').join('');
console.log(newString); // "Javascriptisawesome!"
```


toUpperCase

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase>