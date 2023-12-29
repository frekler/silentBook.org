# Initial

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

## PostgreSql, sequelize

```sh
npm i sequelize sequelize-cli pg pg-hstore
```

.sequelizerc

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

правим конфиги доступа к БД на свои

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
npx sequelize db:seed:all
```

чтобы отменить:
```sh
npx sequelize seed:generate --name Seed
```



## cookies, sessions, bcrypt

```sh
npm i express-session session-file-store bcrypt
```
добавить папку sessions в gitignore


### хуки


```json
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js --ignore sessions -ext js,jsx",
    "db": "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all",
    "initdb": "npx sequelize db:migrate:undo:all && npx sequelize db:migrate && npx sequelize db:seed:all"
  },
```