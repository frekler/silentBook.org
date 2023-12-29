## project init

```sh
npm init -y
```
or (if package.json already exists)
```sh
npm i
```


## gitignore

```sh
npx create-gitignore node
```

## eslint

```sh
npx eslint --init
```

## express

```sh
npm i express
```



## app.js
Basic script to start the server on a local machine

```sh
touch app.js
```


```js
// app.js
const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});
```

### nodemon, morgan

```sh
npm i -D nodemon morgan
```

```js
// app.js
const morgan = require('morgan');
app.use(morgan('dev'));
```

### extra app.js

```js
// app.js
const path = require('path');
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true })); // * мидлварка, для
// * получения req.body в POST 
// * { extended: true } - увеличение объёма передаваемых данных
app.use(express.json()); // * читать JSON - данные из тела запросов
// * Если не подключил - то JSON в тело не зайдёт
```

## PostgreSql, sequelize

```sh
npm i sequelize sequelize-cli pg pg-hstore
touch .sequelizerc
```

```js
// .sequelizerc
const path = require('path');

module.exports = {
    'config': path.resolve('db', 'config', 'database.json'),
    'models-path': path.resolve('db', 'models'),
    'seeders-path': path.resolve('db', 'seeders'),
    'migrations-path': path.resolve('db', 'migrations'),
};
```

```sh
npx sequelize init
```


```json
// database.json
...
```

```sh
npx sequelize db:create
```

Создаём модели
```sh
npx sequelize-cli model:generate --name Sites --attributes siteName:string,rate:integer,ownerId:integer
```

Накатываем миграции
```sh
npx sequelize db:migrate
```
чтобы отменить:
```sh
npx sequelize db:migrate:undo:all
```

Засидим таблицы
```sh
npx sequelize seed:generate --name Seed
npx sequelize db:seed:all
```

чтобы отменить:
```sh
npx sequelize db:seed:undo:all
```

Для заполнения базы через faker:
```sh
npm i @faker-js/faker
npx sequelize-cli seed:generate --name User
npx sequelize db:seed:all
```


Проверка подключения к базе через sequelize


```js
// /db/dbConnectCheck.js
const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена! :)');
  } catch (error) {
    console.error('База данных не подключена:', error.message);
  }
};

```

```js
// app.js
const dbConnectionCheck = require('../db/dbConnectCheck');
dbConnectionCheck();
```

## cookies, sessions, bcrypt

```sh
npm i express-session session-file-store bcrypt
```

добавить папку sessions в gitignore


```js
// app.js
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const sessionConfig = {
  name: 'DolphinsCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

app.use(session(sessionConfig))
```


## React, babel

```sh
npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom
touch .babelrc
```


```json
// .babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```


## .env

```sh
npm i dotenv
touch .env
```

.env:
```
PORT=3000
DB=[dialect]://[user]:[password]@[host]:[port]/[db name]
```


```js
// .sequelizerc
require('dotenv').config()
```



```js
// app.js
require('dotenv').config()
const { PORT } = process.env || 3000;
```


```json
// database.json
"development": {
    "use_env_variable": "DB",
    "dialect": "postgres"
  }
```






## хуки



```json
// package.json
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js --ignore sessions -ext js,jsx",
    "db": "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all",
    "initdb": "npx sequelize db:migrate:undo:all && npx sequelize db:migrate && npx sequelize db:seed:all"
  },
```

Теперь:
```sh
npm run dev
```