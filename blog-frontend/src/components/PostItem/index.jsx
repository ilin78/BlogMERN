import React from 'react';
import './PostItem.scss'
const PostItem = ({ title, slug, create_At, _id}) => {
    return (
        <div>
            <div className="content">
                <div className="post-items">
                    <a href={`/post/${_id}`}><h2>{title}</h2></a>
                    <p>
                        <i>Posted  on {create_At}</i>
                        <a href={`/post/${_id}`}>Remove</a>
                        <a href={`/post/${_id}`}>Edit</a>
                    </p>
                </div>  
            </div>
        </div>
    )
}

export default PostItem;