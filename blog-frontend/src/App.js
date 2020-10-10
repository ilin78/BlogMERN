import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HeaderBlock, PostItem, AddForm } from 'components';
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
       
         <AddForm/>

        <Router>
          <PostItem
          _id="1"
          title="Name Post"
          create_At={''+new Date()}
          />
          <div>
            <Switch>
              {/* <Route path="/" component={PostList}/> */}
              {/* <Route path="/post/:id" component={FullPost}/> */}
              {/* <Route path="/not-found" component={NotFound}/> */}
            </Switch>
          </div>
        </Router>
      </div>  
    </div>    
  );
}

export default App;
 