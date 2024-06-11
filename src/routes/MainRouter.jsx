// MainRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import FormPago from '../pages/FormPago'; // Importación por defecto

const MainRouter = () => {
    return (
        <Routes>
            <Route path="Offside_fest" element={<Main />} />
            <Route path="Offside_fest/formPago/:count" element={<FormPago />} />
        </Routes>
    );
};

export default MainRouter;
