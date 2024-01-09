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



## basic server
Basic script to start the server on a local machine

```sh
touch app.js
```


```js
// app.js
const express = require('express');

const app = express();
const PORT = 3000;

!!!!!!!! ОДИН ПУТЬ


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
// for static files on the frontend
app.use(express.urlencoded({ extended: true }));
// to receive req.body in POST, { extended: true } - increase the amount of transmitted data
app.use(express.json());
// read JSON - data from request body; if don’t connect it, then the JSON will not enter the body
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

Models:
```sh
npx sequelize-cli model:generate --name User --attributes email:string,username:string,password:string,description:text,birthday:date,vip:boolean,friends:integer
```

Migrations:
```sh
npx sequelize db:migrate
```
To undo migrations:
```sh
npx sequelize db:migrate:undo:all
```

Seeding:
```sh
npx sequelize seed:generate --name Seed
npx sequelize db:seed:all
```

Dont forget about `new Date()` in createdAt and updatedAt

Seed undo:
```sh
npx sequelize db:seed:undo:all
```

Seeding db using faker:
```sh
npm i @faker-js/faker
npx sequelize-cli seed:generate --name User
npx sequelize db:seed:all
```


###  Checking connection to the database using sequelize


```js
// /db/dbConnectCheck.js
const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database successfully connected!');
  } catch (error) {
    console.error('Database not connected:', error.message);
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

```sh
# .gitignore
sessions
```


```js
// app.js
const session = require('express-session'); // req.session создает
const FileStore = require('session-file-store')(session); // "база данных" наших сессий создает папку и файлы сессий

const sessionConfig = {
  name: 'Cookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'secret word',
  resave: false, // if true, will resave the session even if it has not changed
  saveUninitialized: false, // if false, cookies will only appear when req.session is set
  cookie: {
    maxAge: 9999999, // lifetime in ms
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
```

```js
// route.js
const bcrypt = require('bcrypt')


```


## React, babel

```sh
npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom
```

```sh
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
```

```sh
touch .env
```

```sh
# .env
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






## hooks



```json
// package.json
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js --ignore sessions -ext js,jsx",
    "db": "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all",
    "initdb": "npx sequelize db:migrate:undo:all && npx sequelize db:migrate && npx sequelize db:seed:all"
  },
```

Using:
```sh
npm run dev
```