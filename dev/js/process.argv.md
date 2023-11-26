const arg = process.argv[2]


argv
arguments
аргументы командной строки

process.argv - это массив, содержащий аргументы командной строки.



argv есть внутри
экспортировать не надо

argv.js
```js
console.log(process) // покажет  все что касается нашей ноды, много всего, и внутри лежит argv
console.log(process.argv)
// Нулевым элементом будет путь до node, первый элемент будет путь до файла . 
// Следующие элементы будут любыми дополнительными аргументами командной строки

```sh
node argv.js hello world
```
// в массив поппадут новые элементы "hello" и "world"
// интересное наблюдение:
node [0]
argv.js [1]
все остальное [2...]


```js

const myCfonts = require('./cfonts')

console.log(process.argv )

function showArgv(argv) {
    return `Это сейчас в argv: ${argv}`
}
console.log(showArgv(process.argv[2]))

myCfonts(process.argv[2])


```


cfonts.js
```js

const cfonts = require('cfonts');

function myCfonts (argv) {
return cfonts.say(argv, {colors: ['red']}) 
}

module.exports = myCfonts



```


