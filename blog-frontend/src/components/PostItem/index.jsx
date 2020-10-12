import React from 'react';
import './PostItem.scss'

import {Link} from 'react-router-dom';

const PostItem = ({ title, create_At, _id, onRemove}) => {
    return (
        <div>
            <div className="content">
                <div className="post-items">
                    <Link to={`/post/${_id}`}><h2>{title}</h2></Link>
                    <p>
                        <i>Posted  on {create_At}</i>
                        <a href="javascript://" onClick={onRemove} >Remove</a>
                        <Link to={`/post/${_id}/edit`}>Edit</Link>
                    </p>
                </div>  
            </div>
        </div>
    )
}

export default PostItem;