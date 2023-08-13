import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'; // Importe seus componentes de página

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Adicione outras rotas aqui, conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;
