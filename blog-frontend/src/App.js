import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HeaderBlock, PostsList, AddForm } from 'components';
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
       
         {/* <AddForm/> */}

        <Router>
          <div>
            <Switch>
              
              <Route path="/"  exact component={ () => (
              <PostsList 
                posts={[
                  {
                    _id:"1",
                    title:"Первая статья",
                    create_At:''+new Date()
                  },
                  {
                    _id:"2",
                    title:"Вторая статья",
                    create_At:''+new Date()
                  },
                  {
                    _id:"3",
                    title:"Третья статья",
                    create_At:''+new Date()
                  }
                ]}/>
              )}/> 
              
              
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
 