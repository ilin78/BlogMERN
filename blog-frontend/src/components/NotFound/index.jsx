import React from 'react';
import { Redirect } from 'react-router';

import './NotFound.scss'

const NotFound = () => {
    return (
        
        <Redirect to ="/"/>

        /*
        <div className="full-post">
            
            <div className="container">
                <h1>404</h1>
                <h1>Ничего не найдено :(</h1>
                <p>K сожалению, ничего по данному адресу не найдено.</p>
            </div>
            
        </div>
        */
        
        
    )
}

export default NotFound;