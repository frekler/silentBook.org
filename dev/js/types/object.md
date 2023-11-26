Объект в JS - набор пар "ключ: значение"
Любой ключ в объекте является строкой
ключи не имеют строгой последовательности

цикл for in для объектов
не соблюдает индексацию (вроде)


```js

let object = {} //  пустой объект

let object = {
  key: value,
  key2: value2,
}

// ({ 'key': 'property' }, 'key') => 'property'

const objValue = (obj, key) => {
  return obj[key];
}

```



Методы объекта

```js

let car = {
  model: "toyota",
  year: 2017,
  show: function() {
    console.log(car.model)
  }
};
car.show();
```


# this

this - это специальная переменная, которая ссылается на тот оьъект, в котором она на данный момент находится.

```js
let obj = {
  model: "toyota",
  year: 2017,
  show: function() {
    console.log(this.model)
  }
};
obj.show();


```


// for (let key in arr){        // Это для объектов
//     console.log(arr[key]);
// }

<https://learn.javascript.ru/object>