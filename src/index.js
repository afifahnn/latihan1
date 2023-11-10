import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import { ReduxList } from './routes/ReduxList';
import { LoginPage } from './pages/auth/LoginPage';
import { RouterMovie } from './routes/RouterMovie';

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryMovie}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
          <ToastContainer/>
          {/* <ReduxList/> */}
          {/* <LoginPage/> */}
          <RouterMovie/>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);