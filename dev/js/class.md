Классы в JavaScript были введены в ECMAScript 2015 и представляют собой синтаксический сахар над существующим в JavaScript механизмом прототипного наследования. 

Когда-то все писалось на прототипах
Сейчас уже все пишется на классах
---

Метод constructor — специальный метод, необходимый для создания и инициализации объектов, созданных, с помощью класса.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//  Экземпляр класса
const square = new Rectangle(10, 10);
```

---


```js
// В РОДИТЕЛЯ выносим только самое необходимое
// наследоваться оно будет всем последующим

// с передачей аргументов (последовательно, по очереди)
class Person{
    constructor(name = 0, age){     // сюда передаются
        this.name = name;       // сюда присваиваются
        this.age = age;
    }
    // методы для класса
    // в большинстве случаев пишутся за конструктором
    sayName () {            // этот метод получается полиморфическим
        console.log(`My name: ${this.name}`)
    }
}

// экземпляр класса
// и передача аргументов ЯВНО
const p1 = new Person('Биба', 11)   // отсюда берутся

console.log("p1:", p1)
p1.sayName();


class Student extends Person {
    // последовательная передача аргументов (важна последовательность)
    constructor(name, age, group) {
        super(name, age)
        this.group = group;
    }
}
const s1 = new Student('Denis', 18, 'Dolphins')
```


```js
// передача аргументов в виде одного объекта
// через деструктуризацию

class Person{
    constructor({ name, age} ){     // из объекта деструктурируем name и age и по ключам достаём
        this.name = name;       // сюда присваиваются
        this.age = age;
    }
    // методы для класса
    // в большинстве случаев пишутся за конструктором
}

const p1 = new Person({ name: 'Биба', age: 11}) // один аргумент в виде одного объекта (но несколько полей)




class Student extends Person {
    // через полную деструктуризацию (так не желательно!!!!)
        constructor({name, age, group}) {
            super({name, age})  //  лишний раз разворачиваем
            this.group = group;
        }
}



// А ТАК ВРОДЕ ТОЖЕ СРАБОТАЕТ
class Student extends Person { 
    constructor(options) {
        super(options)  /
    this.group = options.group  
    }
}
const s1 = new Student({name: 'Denis', age: 18, group: 'Dolphins'})


```





```js
// передача аргументов через объект options
// без деструктуризации

class Person{
    constructor(options){     // входящий аргумент options - объект, и он один 
        this.name = options.name;       // а ключей несколько и к ним можно обращаться как к ключам (name и age)объекта options
        this.age = options.age || 0;    // значение по умолчанию через пайпы ||
        // есть еще нулевое слияние this.age = options.age ?? 0
        // оператор опциональной последовательности this.name = options?.name, тогда даже при const p1 = new Person() без передачи объекта в Person() - ошибки не будет (т.е. это проверки - существует ли options, как объект, и если не сущесвтует, тогда там не надо никакие name и age там искать, потому что это бесполезно)
    }

    birthDay() {    // метод
    console.log(`С днем рождения ${this.name}`)
    this.age += 1;  
    }
}

const p1 = new Person({ name: 'Биба', age: 11}) // один аргумент в виде одного объекта 
p1.birthday(); // возраст, который увеличиться в экземпляре класса p1
```



## Наследование классов extends

```js
class Person{
    constructor(options){
        this.name = options.name;
        this.age = options.age || 0;
    }

    birthDay() { 
    console.log(`С днем рождения ${this.name}`)
    this.age += 1;  
    }
}

class Student extends Person { // класс Student расширяется классом Person (мы сделали наследование всех методов Person + из super мы унаследовали весь конструктор родительский)
    constructor(options) {
        super(options)  //  наследование конструктора Person, передаем ОДНИМ объектом options
        // super является родительским конструктором, т.е. constructor(options) в class Person
        // и у нас будут заходить те же самые объекты (в данном случае объект options)
    this.group = options.group  // это поле не пойдет в родителя, используется только здесь
    }
}

const s1 = new Student({name: 'Denis', age: 18, group: 'Dolphins'})

// если мы хотим работать с options,
// то у нас будет только один option, как объект
// и в нем мы обращаемся к свойствам
// это правильный подход
// мы всё передаем в одном месте


// если мы хотим передавать несколько аргументов
// значит это уже будет не в виде объекта
```



```js
// можно еще так
// но так можно запутаться
// и так лучше не делать


class Student extends Person {
    constructor(options, group) {
        super(options)
    this.group = group
    }
}

const s1 = new Student({name: 'Denis', age: 18 }, 'Dolphins')



```




Публичные поля
Публичные поля доступны на экземпляре класса (самих классов)
Мы можем указать вне конструктора 




```js

class Person{
    human = 'Im human'
    constructor(name, age){
        this.name = options.name;
        this.age = options.age;
    }
}

class Student extends Person {

    bootcamp = 'BName'  // строго невходящее, оно ниоткуда не приходит, но можно наследовать (но только таким, оно неизменяемо)

    constructor(name, age, group) {
        super(name, age)
        this.group = group;
    }
}
const s1 = new Student('Denis', 18, 'Dolphins')
console.log(s1) // human: 'Im human', name: 'Denis', age: 18, bootcamp: 'BName', group: 'Dolphins'
// т.е. последовательность такая: сначала идёт всё из super, потом идут публичные поля, а потом идет группа

```



-----------



Приватные поля (в рамках инкапсуляции)

Раньше: this._brand = 'BrandName'
Сейчас: #brand = 'BrandName'

















----------

```js

class Student extends Person {
    constructor(name, age, group) {
        super(name, age)
        this.group = group;
    }
}
const s1 = new Student('Denis', 18, 'Dolphins')
const s2 = new Student('Denis', 18, 'Wolves')
const s3 = new Student('Denis', 18, 'Wolves')
const s4 = new Student('Denis', 18, 'Dolphins')


// хотим отфильтровать по группам
const arr = [s1, s2, s3, s4]
const filterByGroup = arr.filter((el) => el.group === 'Dolphins') //  отфильтрует по group

```


А теперь тоже самое через статические методы

```js

class Student extends Person {
    constructor(name, age, group) {
        super(name, age)
        this.group = group;
    }
    
    // Статические методы вызываются НА САМОМ КЛАССЕ, А НЕ НА ЕГО ЭКЗЕМПЛЯРЕ
    static filterByGroup (students, group) {
        const arr = students.filter((el) => el.group === group)
        if (arr.length) {
            return arr
        } else { return 'Студенты не найдены'}
    }
}

// экземпляры
const s1 = new Student('Denis', 18, 'Dolphins')
const s2 = new Student('Denis', 18, 'Wolves')
const s3 = new Student('Denis', 18, 'Wolves')
const s4 = new Student('Denis', 18, 'Dolphins')


// хотим отфильтровать по группам
const arr = [s1, s2, s3, s4]
const filterByGroup = arr.filter((el) => el.group == 'Dolphins') //  отфильтрует по group

// вызовем статический метод
console.log(Student.filterByGroup(arr, 'Dolphins'))
```






ПРИМЕРЫ СТАТИЧЕСКИХ МЕТОДОВ
они вызываются не на каком-то конкретном экземпляре, а на самом классе непосредственно
Number.isNaN 
Array.isArray
Object.keys
Object.value
Object.assign



----------












```js
class Animal {
    constructor(name) {
    this.name = name || 'NoName';
  }

  speak() {
    console.log(`${this.name} издаёт звук.`);
  }
}

// вызовем метод на экземпляре класса
const animal1 = new Animal('Sharik')
animal.speak();

// через деструктуризацию
class Animal {
    constructor({ name, age} ) {
    this.name = name || 'NoName';
    this.age = age || 0;
  }
}

// через options (без деструктуризации)
class Animal {
    constructor(options) {
    this.name = options?.name || 'NoName';
    this.age = options?.age || 0;
  }
}

// наследование

class Dog extends Animal {
  constructor(name) {
    super(name); // вызывает конструктор super класса и передаёт параметр name
  }

  speak() {
    console.log(`${this.name} лает.`);
  }
}



```