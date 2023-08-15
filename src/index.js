import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css'

import TodoApp from './components/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
