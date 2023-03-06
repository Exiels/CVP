import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

import { setDefaultLanguage, setDefaultTranslations } from 'react-multi-lang'
import en from './languages/en.json'
import fr from './languages/fr.json'

setDefaultTranslations({ en, fr })
setDefaultLanguage('fr')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
