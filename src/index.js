import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
// import { Router1 } from './routes/Router1';
// import { Homepage } from './pages/Homepage';
// import { Card } from './pages/Card';
import { Todo } from './pages/Todo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <Todo/>
    </QueryClientProvider>
    {/* <Homepage/> */}
    {/* <Router1/> */}
    {/* <Card/> */}
  </React.StrictMode>
);