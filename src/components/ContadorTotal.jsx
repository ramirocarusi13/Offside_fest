// ContadorTotal.jsx
import React from 'react';

const ContadorTotal = ({ contador, total, animateTotal, formatCurrency, servicioWeb }) => {
    return (
        <div>
            <h1 className={`text-xl font-bold ${animateTotal}`}>Total: {formatCurrency(total)}</h1>
            <p className={`text-xs ${animateTotal}`}>Servicio Web: {formatCurrency(servicioWeb)}</p>
        </div>
    );
};

export default ContadorTotal;
