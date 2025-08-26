import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";  
import 'animate.css';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);


// ---------------------------------------------------------------------------
// npm i -D react-router-dom@latest
// npm install sass
// npm i bootstrap@latest
// npm install @fortawesome/fontawesome-svg-core
// npm install @fortawesome/free-solid-svg-icons
// npm install @fortawesome/react-fontawesome
// npm i bootstrap-icons
// npm install react-scroll
// npm i axios
// npm i recoil
// npm i font-awesome
// npm i formik
// npm install react-hook-form
// npm i yup
// npm i react-bootstrap
// npm i react@18 react-dom@18
// npm update 
// npm audit fix
// npm start 
// npm install animate.css
