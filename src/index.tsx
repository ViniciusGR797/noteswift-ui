import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { UserCreatedProvider } from './contexts/UserCreatedContext';
import { UserLoginProvider } from './contexts/UserLoginContext';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Router>
        <DarkModeProvider>
          <UserCreatedProvider>
            <UserLoginProvider>
              <App />
            </UserLoginProvider>
          </UserCreatedProvider>
        </DarkModeProvider>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Não foi possível encontrar o elemento com id "root"');
}
