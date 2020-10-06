import React from 'react';

import { HeaderBlock, PostItem } from 'components';
function App() {
  return (
    <div className="App">
      
      <HeaderBlock  
        title="Заголовок Сайта"
        description="Описание"
        imageUrl="https://images.unsplash.com/photo-1601753657684-cefd5aa6f284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
      
      <div className="container">

        <div className="content">
          <button>Add post</button>
        </div>
        <PostItem
          _id="1"
          title="Name Post"
          create_At={''+new Date()}
        />


        <form className="add-form">
            <div className="add-form__row">
              <h4>
                <label className="title">Title</label>
              </h4>
              <input 
                type="text"
                className="form-control"
                id="text"
                placeholder="Name title"
              />
            </div>

            <div className="add-form__row">
              <h4>
                <label className="image">Image URL</label>
              </h4>
              <input 
                type="text"
                className="form-control"
                id="image"
                placeholder="Enter image URL"
              />
            </div>

            <div className="add-form__row">
              <h4>
                <label for="description">Description</label>
              </h4>
              <textarea 
                rows="10"
                className="form-control"
                type="text"
                id="description"
                placeholder="Enter text"
              />
            </div>

            <button type="submit"> Create </button>
        </form>
      </div>
    
    </div>    
  );
}

export default App;
