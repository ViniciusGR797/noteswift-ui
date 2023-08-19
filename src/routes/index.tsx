import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage'; // Importe seus componentes de página
import LoginPage from '../pages/LoginPage'; // Importe a página de login
import CadastroPage from '../pages/CadastroPage'; // Importe a página de cadastro
import DashboardPage from '../pages/DashboardPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/register" element={<CadastroPage />} /> 
      <Route path="/dashboard" element={<DashboardPage />} /> 
      {/* Adicione outras rotas aqui, conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;
