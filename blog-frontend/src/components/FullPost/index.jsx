import React from 'react';
import { Link } from "react-router-dom";

import './FullPost.scss'


const FullPost = ({ create_At }) => {
    return (
        <div className="full-post">
            <div className="container">
                <Link to="/"> 
                    <button> Назад </button>
                </Link>
                <p>
                    <i   className="full-post__details">Posted  on {create_At}</i>
                </p>
                <br/>
                <p className="full-post__text"> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Voluptatem facere nulla minus maxime quae consequatur mollitia 
                    modi? Ducimus, incidunt repellendus. Enim placeat quasi voluptates 
                    a exercitationem veniam doloremque modi ex?
                </p>
            </div>
        </div>
    )
}

export default FullPost;