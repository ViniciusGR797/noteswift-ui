import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { UserCreatedProvider } from './contexts/UserCreatedContext';
import { UserLoginProvider } from './contexts/UserLoginContext';
import { AuthProvider } from './contexts/AuthContext';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <DarkModeProvider>
            <UserCreatedProvider>
              <UserLoginProvider>
                <App />
              </UserLoginProvider>
            </UserCreatedProvider>
          </DarkModeProvider>
        </AuthProvider>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Não foi possível encontrar o elemento com id "root"');
}
