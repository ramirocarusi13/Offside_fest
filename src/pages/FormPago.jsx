import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ContadorTotal from '../components/ContadorTotal';
import Header from '../components/Header'

const FormPago = () => {
    const { count } = useParams();
    const numForms = parseInt(count, 10);

    // Define the total and service web values based on the number of forms
    const total = numForms * 6300;
    const servicioWeb = numForms * 300;

    // Define the state for contador and animateTotal (if needed)
    const [contador, setContador] = useState(numForms);
    const [animateTotal, setAnimateTotal] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add logic to handle form submission
        console.log('Forms submitted');
    };

    const formFields = Array.from({ length: numForms }).map((_, index) => (
        <div key={index} className="form-group mb-4">
            <h3 className="font-semibold mb-2">Formulario {index + 1}</h3>
            <label className="block text-sm font-medium mb-1">
                Nombre y Apellido:
                <input type="text" className="block w-full mt-1 border rounded-md p-2" />
            </label>
            <label className="block text-sm font-medium mb-1">
                Telefono:
                <input type="text" className="block w-full mt-1 border rounded-md p-2" />
            </label>
            <label className="block text-sm font-medium mb-1">
                DNI:
                <input type="text" className="block w-full mt-1 border rounded-md p-2" />
            </label>
            <label className="block text-sm font-medium mb-1">
                Instagram:
                <input type="text" className="block w-full mt-1 border rounded-md p-2" />
            </label>
        </div>
    ));

    return (
        <>  
            <Header />
            <div>
                <h1>Informacion Tickets</h1>
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Formulario de Pago</h1>
                <form onSubmit={handleSubmit}>
                    {formFields}
                    <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
                        Enviar
                    </button>
                </form>
            </div>
            <div className="flex flex-col items-center p-4 w-full ">
                <ContadorTotal
                    contador={contador}
                    total={total}
                    animateTotal={animateTotal}
                    formatCurrency={(value) => value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 })}
                    servicioWeb={servicioWeb}
                />
            </div>
        </>

    );
};

export default FormPago;
