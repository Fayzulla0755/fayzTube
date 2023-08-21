import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {App} from './components';
import {BrowserRouter} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,  } from 'react-toastify'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  <ToastContainer/>
    
  </BrowserRouter>
  </React.StrictMode>
);


