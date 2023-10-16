import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import { RouterMovie } from './routes/RouterMovie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <ToastContainer/>
      <RouterMovie/>
    </QueryClientProvider>
  </React.StrictMode>
);