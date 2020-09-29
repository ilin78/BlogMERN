import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import PostModel from './models/Post';

const PORT = 3333;

mongoose.connect('mongodb://localhost:27017/blog');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
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


app.get('/posts', (req, res) => {
    PostModel.find().then((err, posts) => {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
});


app.delete('/posts/:id', (req, res) => {
    PostModel.remove({
        _id: req.params.id
    }).then(post => {
        if (post) {
            res.json({status: "deleted"});
        } else {
            res.json({status: "error"});
        }
    });   
});


app.put('/posts/:id', (req, res) => {
    PostModel.findByIdAndUpdate(
        req.params.id, // поиск по id
        {$set: req.body}, // свойство set - хранит новые данные
        (err) => {
            if(err) {
                res.send(err)
            }
            res.json({status: "update"});
        }
    );
});


// const posts = [
//     {
//         title: "0 H W",
//         text: "Just text"
//     },
//     {
//         title: "1 H W",
//         text: "Just text"
//     },
//     {
//         title: "2 H W",
//         text: "Just text"
//     },
//     {
//         title: "3 H W",
//         text: "Just text"
//     }
// ];



// // get - получает 2 параметра (маршрут, анонимная функция([вся инфа о запросе], [хранит все методы для передачи ответа] ))
// app.get('/posts', function(req, res) {
//     return res.send(posts);
// });

// // этот метод позволяет обратиться по ID
// app.get('/posts/:id', function(req, res){
//     const id = req.params.id;
//     return res.send(posts[id]);
// });



app.listen(PORT, console.log(`port ${PORT}`));