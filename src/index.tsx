import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
