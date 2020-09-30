import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import PostContoller from './controllers/PostContoller';


const Post = new PostContoller(); 
const app = express();
const PORT = 3333;

mongoose.connect('mongodb://localhost:27017/blog');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
app.post('/posts', Post.create);
app.get('/posts', Post.index);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id',Post.update);

app.listen(PORT, console.log(`port ${PORT}`));