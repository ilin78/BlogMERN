
# Frontend

# Подготовка проекта

Для разработки front-end будем использовать библиотеку React

>$ npx create-react-app blog-frontend

 Чтобы избавиться от относительных путей при import выполним команду, чтобы внести изменения в конфигурацию webpack.js

>$ yarn eject

далее добавим путь к проекту в файле

> config/webpack.config.js

находим  ```resolve: {...}``` и вносим изменения ```path.resolve([<путь>])```

```js
modules: ['node_modules', path.resolve('./src')].contact(... 
```

проверим как работает, для этого изменим относительный путь на абсолютный.

```js
  //import App from './App';
    import App from 'App';
```

# Структура проекта 

Начальная структура проекта

```
src
│   index.js
│   App.js
│
└───pages
└───styles
│   │    app.scss
│   
└───components
    └───HeaderBlock
    │   │   HeaderBlock.scss
    │   │   index.jsx
    │
    │   index.js
```



Компонент ```HeaderBlock.jsx``` будет получать данные (title, description, imageUrl}) из ```App.js```

Таким образом через деструктуризацию {...} будем брать любой компонент
* HeaderBlock.jsx
```jsx
import React from 'react';

import './HeaderBlock.scss'

const HeaderBlock = ({title, description, imageUrl}) => {
    return (
        <div className="header-block" style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="container">
                <div className="header-block__overlay"></div>
                <div className="header-block__center">
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock;
```

Пока нет redux, временно захардкодим данные
* App.js
```jsx
import React from 'react';

import { HeaderBlock } from 'components';
function App() {
  return (
    <div className="App">
      <HeaderBlock 
        title="Заголовок Сайта"
        description="Описание"
        imageUrl="https://images.unsplash.com/photo-1601753657684-cefd5aa6f284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
      
    </div>    
  );
}

export default App;
```

