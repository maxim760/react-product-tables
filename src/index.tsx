import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './contexts/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
