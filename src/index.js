import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
// import { Router1 } from './routes/Router1';
// import { Homepage } from './pages/Homepage';
// import { Card } from './pages/Card';
import { Todo } from './pages/Todo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Homepage/> */}
    {/* <Router1/> */}
    {/* <Card/> */}
    <Todo/>
  </React.StrictMode>
);