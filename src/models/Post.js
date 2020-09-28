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
const Post = mongoose.model('Post', PostSchema);
export default Post;