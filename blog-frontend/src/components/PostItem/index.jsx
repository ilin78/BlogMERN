import React from 'react';
import './PostItem.scss'

import {Link} from 'react-router-dom';

const PostItem = ({ title, slug, create_At, _id}) => {
    return (
        <div>
            <div className="content">
                <div className="post-items">
                    <Link href={`/post/${_id}`}><h2>{title}</h2></Link>
                    <p>
                        <i>Posted  on {create_At}</i>
                        <Link href={`/post/${_id}`}>Remove</Link>
                        <Link href={`/post/${_id}`}>Edit</Link>
                    </p>
                </div>  
            </div>
        </div>
    )
}

export default PostItem;