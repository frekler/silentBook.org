1.txt
Привет

2.txt
Мир!

fs.js

Подключение модуля fs
// устанавливать не надо, он есть в node

```js
const fs = require("fs");
```

```js
console.log(fs); // покажет что из себя представляет объект fs
```

метод
fs.readdirSync(path[, options])

reads the contents of the directory

```js
const dir = fs.readdirSync("./lib");
```

```js
console.log(dir); // массив с файлами внутри директории
```

```js
dir.forEach(el) => {
    console.log(el)
    // покажет
// 1.txt
// 2.txt
    const data = fs.readFileSync('./lib' + el, 'utf-8') // `./lib${el}`
    // utf-8 раскодировать
    console.log(data) // выведет данные двух файлов
    // добавление содержимого в новый файл
    fs.appendFileSync("./new.txt", data)

}

```

метод
fs.readFileSync(path[, options])

метод

ОСНОВНЫЕ СИНХРОННЫЕ МЕТОДЫ

fs.readFileSync("./file.txt", "utf-8") - чтение файла
fs.writeFileSync("./file.txt", "New text") - записать новый ф
fs.appendFileSync("./file.txt", "Appended text", "utf8") - добавить в файл
fs.readdirSync(dir)

fs.statSync("./file.txt) - статистику считать (содержимое каждых файлов)

удаление файлов!!!!!! посмотреть






ЕЩе пример

```js
 const fs = require("fs");
let filePath = "./text.txt";
let data = fs.readFileSync(filePath, "utf8"); data = data + "my text"; fs.writeFileSync(filePath, data);
```

----

How to create a directory if it doesn't exist using Node.js
<https://stackoverflow.com/questions/21194934/how-to-create-a-directory-if-it-doesnt-exist-using-node-js>

For individual dirs:
```js
var dir = './tmp';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
```
Or, for nested dirs:
```js
var dir = './tmp/but/then/nested';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}
```



fs.readFileSync(__dirname + '/crew.txt')

В переменной __dirname содержится полный путь к каталогу, в котором находится текущий файл.