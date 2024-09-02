
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pago from '../pages/Pago';
import Main from '../pages/Main';

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Pago/:count" element={<Pago />} />
        </Routes>
    );
};

export default MainRouter;
