import PostModel from '../models/Post';

class PostContoller {

    index(req, res) {
        PostModel.find().then((err, posts) => {
            if (err) {
                res.send(err);
            }
            res.json(posts);
        });
    }

    create(req, res) {
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
    }

    read(req, res){                             // поиск по id
        PostModel.findOne({_id: req.params.id})
        .then(post => {
            if(!post) {
                res.send({error: "not found"});
            } else {
                res.json(post);
            }
        });
    }

    update(req, res) {
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
    }

    delete(req, res) {
        PostModel.remove({
            _id: req.params.id
        }).then(post => {
            if (post) {
                res.json({status: "deleted"});
            } else {
                res.json({status: "error"});
            }
        });   
    }
}

export default PostContoller;