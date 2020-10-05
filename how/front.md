
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

Предпологается создать директиву из трех папок 

1. Компоненты - components 

* HeaderBlock:
    * HeaderBlock.scss
    * index.jsx
    
index.js
2. Страницы - pages
3. Стили - styles (глобальные стили) подключим их к index.js


