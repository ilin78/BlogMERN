# BlogMERN

# Как сделать сервер с POST и GET запросами

Установить ```express``` и ```body-parser```

Тестовые данные 

```json
const posts = [
    {
        title: "0 H W",
        text: "Just text"
    },
    {
        title: "1 H W",
        text: "Just text"
    },
    {
        title: "2 H W",
        text: "Just text"
    },
    {
        title: "3 H W",
        text: "Just text"
    }
];
```

Подключаем нужные библиотеки

```js

const express = require('express');
// позволяет серверу читать данные, которые были переданы методом POST
const bodyParser = require('body-parser'); 
const app = express();
```

Далее нужен PORT и доп. метод для bodyParser()

```js
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = 3333;
```

Добавляем методы GET и POST 
 
```js

// get - получает 2 параметра (маршрут, анонимная функция([вся инфа о запросе], [хранит все методы для передачи ответа] ))
app.get('/posts', function(req, res) {
    return res.send(posts);
});

// этот метод позволяет обратиться по ID
app.get('/posts/:id', function(req, res){
    const id = req.params.id;
    return res.send(posts[id]);
});

app.post('/posts', function(req, res){
    const data = req.body;  // здесь будут появляться данные отправленные методом POST
    console.log(data);
    posts.push(data);       // сохраняем эти данные в POST
    return res.send(posts);
});

app.listen(PORT, console.log(`port ${PORT}`));

```

Далее отправляем данные с помощью метода POST в программе Postman

![](https://github.com/dedmosay/BlogMERN/blob/master/how/img/POST.jpg)



# Подлючаем базу данных

https://mongoosejs.com/

Установим данную библиотеку и запустим тестовый код, а затем убедимся, что в базе данных появилась тестовая база данных ```test``

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

![](https://github.com/dedmosay/BlogMERN/blob/master/how/img/dbs.jpg)


# Подключаем Babel, создаем модель

Устанавливаем Babel с помощью npm 

```npm install --save-dev babel-cli babel-core babel-preset-env babel-preset-stage-0 ```
и дополнительно
```npm install --save-dev babel-plugin-transform-object-rest-spread```

Можно так же глобально установить babel (unix):
```sudo npm install -g babel-cli```

Установим значения в ```.preset```
```js
{
    "presets": ["env", "stage-0"]
}
```

Для проверки напишем в ES6
```js
const arr = [1,2,3,4,5];
const result = arr.map(value => value * 2);

console.log(result)
```

Запустим скрипт 
>babel index.js -d dist

В папке dist получим код ES5 

```js
"use strict";

var arr = [1, 2, 3, 4, 5];
var result = arr.map(function (value) {
  return value * 2;
});

console.log(result);
```


# Склеиваем команды запуска и babel
 
```js
"build":"babel src -d dist",
"start": "node dist/index.js",
"build-start":"npm run build && npm start"
```
Это позволит работать одновременно с ES6 и использовать преймущества JS перед ES5 (такие как импорт и деструктуризации)
> npm run build-start



# Структура

```src / models``` 
- Post.js  - для работы со статьями

```js
import mongoose, { Schema } from "mongoose";
const PostSchema = new Schema(
    {
        title: String,          // заголовок
        text: String            // текст
    }, 
    {
        timestamps: true        // дата
    }
);
const Post = mongoose.model('Post', PostSchema)
export default Post;
```


Теперь можем использовать эту схему и наполнять ```blog``` базу данных.
```src / ``` 
- index.js - основной скрипт
```js
import mongoose from "mongoose";
import PostModel from './models/Post'

mongoose.connect('mongodb://localhost:27017/blog');

const post = new PostModel(
    { 
        title: "Тестовая запись",
        text: "Just text"
    }
);

post.save().then(() => console.log('OK')); // когда данные запишутся в БД, будет выполнено сообщение в консоль "OK"
```

Теперь, когда мы запустили программу, проверим БД.
![](https://github.com/dedmosay/BlogMERN/blob/master/how/img/dbs-blog.jpg)

Зайдем в базу ```use blog``` и убедимся в том, что база создалась.

![](https://github.com/dedmosay/BlogMERN/blob/master/how/img/dbs-data.jpg)

# CRUD + MONGO DB

Теперь когда все готово, создадим запросы с POST, GET, DELETE, UPDATE

Подключим библиотеки и PostModel

```js
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import PostModel from './models/Post';

const PORT = 3333;

mongoose.connect('mongodb://localhost:27017/blog');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
```

Добавим метод POST

```js
app.post('/posts', function(req, res){
    const data = req.body;          // здесь будут появляться данные отправленные методом POST
    
    const post = new PostModel(     // c помощью Postman отправляем данные 
        { 
            title: data.title,  
            text: data.text
        }
    );
    
    post.save().then(()=>{          // в случае успеха Postman получит .json - { status: "ok"}
        res.send({ status: "ok"})
    });
});
```
Как видно данные были отправлены, и после записи в БД мы получили ответ об успешной операции.
![](https://github.com/dedmosay/BlogMERN/blob/master/how/img/post-crud.jpg)

Метод GET

```js
app.get('/posts', (req, res) => {
    PostModel.find().then((err, posts) => {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
});
```

Теперь проверим метод GET, как видно все получилось.
![](https://github.com/dedmosay/BlogMERN/blob/master/how/img/get-crud.jpg)



