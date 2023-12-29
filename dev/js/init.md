## project init

```sh
npm i
```
or
```sh
npm init -y
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

## nodemon, morgan

```sh
npm i -D nodemon morgan
```

## app.js
Базовый скрит для запуска сервера на локальной машине

```sh
touch app.js
```

app.js:
```js
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});
```

extra:
```js
app.use(express.static(path.join(process.cwd(), 'public')));
```

## PostgreSql, sequelize

```sh
npm i sequelize sequelize-cli pg pg-hstore
touch .sequelizerc
```

.sequelizerc:
```js
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

database.json:
```
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
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('studentswhales', 'whale2', '1', {
  host: 'localhost',
  dialect: 'postgres',
});

async function checkConnect() {
  try {
    await sequelize.authenticate()
    console.log('БАЗА ПОДКЛЮЧЕНА!')
  } catch (error) {
    console.log('БАЗА НЕ ПОДКЛЮЧЕНАЯ ==>', error)
  }
}
checkConnect()
```

## cookies, sessions, bcrypt

```sh
npm i express-session session-file-store bcrypt
```

добавить папку sessions в gitignore

app.js:
```js
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const sessionConfig = {
  name: 'WhalesCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  }
}

app.use(session(sessionConfig))
```


## React, babel

```sh
npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom
touch .babelrc
```

.babelrc:
```
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

.sequelizerc:
```
require('dotenv').config()
```


app.js:
```js
require('dotenv').config()
const PORT = process.env.PORT || 3000;
```

database.json:
```json
"development": {
    "use_env_variable": "DB",
    "dialect": "postgres"
  }
```






## хуки


package.json:
```json
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