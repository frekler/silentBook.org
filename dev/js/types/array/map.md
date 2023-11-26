не мутирующий


first split for lines (\n)
then split all data in line

```js
const lines = str.split("\n");
const crew = lines.map((member) => member.split(", "));
```



```js
// .map() — возвращает новый массив. Запускает для каждого элемента callback функцию, которая может
// как-то изменять текущий элемент

// const people = [
//   { id: 1, name: 'Иван Петров' },
//   { id: 2, name: 'Сергей Иванов' },
//   { id: 3, name: 'Алексей Узенюк' },
// ];
//
// const getNames = (el) => {
//   return el.name;
// }
//
// const names = people.map(getNames);
// console.log({ names });

```