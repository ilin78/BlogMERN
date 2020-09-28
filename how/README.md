# BlogMERN

#Как сделать сервер с POST и GET запросами

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

![](https://github.com/dedmosay/BlogMERN/how/img/POST.jpg)

