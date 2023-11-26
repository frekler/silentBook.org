
## const
нельзя оставить без присвоения
нельзя переприсвоить
нельзя переобъявить
нельзя использовать до объявления

## let
нельзя переобъявить
нельзя использовать до объявления

## var
можно переобъявить


# 8 типов данных
7 - примитивных и 1 сложного типа - объект (ключ-значение) и у него есть подвиды (массивы)


// ПРЕОБРАЗОВАНИЕ ТИПОВ

// ТАБЛИЦА!!!!!!!!!!!!

// произойдет неявное преобразование К СТРОКЕ если знак + и если справа или слева от + есть строка

```js
console.log(String(23)) // 23 (он это сделал явно)
console.log(String(null)) // null - привел к строке (он это сделал явно), будто обернул в ковычки
console.log(String(true)) // true - привел к строке (он это сделал явно)
```

```js
console.log(Number('78'))  // 78
console.log(Number(true))  // 1
console.log(Number('Дом')) // NaN (невозможно привести к числу)
```

```js
console.log(Boolean(55)) // true -
console.log(Boolean(-55)) // true
console.log(Boolean(0)) // false
console.log(Boolean('Ку')) // true
console.log(Boolean(' ')) // true
console.log(Boolean('')) // false
```

NaN и undefined - это не ошибки!

NaN - это числовое значение

```js
// метод isNaN - пытается привести значение к числу
// и если у него это получилось, то NaN нет и вернёт нам false

console.log(isNaN(12)); // false
console.log(isNaN('12')); // false
console.log(isNaN('Дом')); //true
console.log(isNaN(NaN)); // true
```

```js
// метод Number.isNan

console.log(Number.isNaN(12)); // false
console.log(Number.isNaN('12')); // false
console.log(Number.isNaN('Дом')); //false
console.log(Number.isNaN(NaN)); // true
```














// let в отличие от var
// существует в блочной, а не в функциональной области видимости

// области видимости:
// 1 глобальная
// 2 блочная
// 3 функциональная


// Чтобы определить область видимости переменной, нужно знать
// её ограничения (откуда она не может убежать)

// let и const имеют блочную область видимости и они не могут убежать из блока
// у var не глобальная область видимости, но функциональная!

// глобальная (улица)
const tel = 'IPhone'
console.log(1, tel);     // 1 Iphone

// блочная (дом)
// if (5 > 2) {
//      // блочная
//      const tel = 'Xiaomi'
//      console.log(2, tel) // 2 Xiaomi
// }

function foo() {
     // функциональная область видимости
     var tel = 'Xiaomi';
     console.log(2, tel)
}

foo();
//
console.log(3, tel) // IPhone


// у функций самая жесткая область видимости!!!!


// переменная которая не объявлена никаким ключевым словом имеет глобальную видимость
// но если 'use strict' (в начале кода) - это "строгий режим", то и они не будут работать


<https://learn.javascript.ru/type-conversions>