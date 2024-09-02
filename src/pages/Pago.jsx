import React, { useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import ContadorTotal from '../components/ContadorTotal';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';

const Pago = () => {
    const { count } = useParams();
    const numForms = parseInt(count, 10);

    // Define the total and service web values based on the number of forms
    const total = numForms * 8000;
    const servicioWeb = numForms * 300;

    // Define the state for contador and animateTotal (if needed)
    const [contador, setContador] = useState(numForms);
    const [animateTotal, setAnimateTotal] = useState('');

    // State to store form data
    const [formData, setFormData] = useState(
        Array.from({ length: numForms }).map(() => ({
            nombre: '',
            telefono: '',
            dni: '',
            instagram: ''
        }))
    );

    const handleChange = (index, field, value) => {
        const newFormData = [...formData];
        newFormData[index][field] = value;
        setFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Construct WhatsApp message
        const message = formData.map((data, index) => (
            `Nombre y Apellido: ${data.nombre}\n` +
            `Telefono: ${data.telefono}\n` +
            `DNI: ${data.dni}\n` +
            `Instagram: ${data.instagram}\n`
        )).join('\n') + 
        `\nTotal: ${total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 })}` +
        `\nServicio Web: ${servicioWeb.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 })}`;

        const whatsappUrl = `https://wa.me/5492324679484/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const formFields = Array.from({ length: numForms }).map((_, index) => (
        <div key={index} className="p-4 border border-stone-800 bg-neutral-950 rounded-lg flex w-full flex-col mb-4">
            {index === 0 && (
                <h3 className="font-semibold text-xs mb-2 bg-violet-600 rounded-md py-2 px-3">Los Qrs se enviarán por Whatsapp a estos datos.</h3>
            )}
            <label className="block text-sm font-medium mb-1">
                <p className='text-xs pl-2 text-stone-400'>Nombre y Apellido*</p>
                <div className='relative flex items-center text-violet-600 focus-within::text-violet-800 rounded-md border-violet-600'>
                    <PersonIcon className='w-5 h-5 absolute ml-2 mt-1' />
                    <input
                        type="text"
                        className="block w-full mt-1 rounded-md pl-10 p-3 font-medium placeholder:text-stone-600"
                        placeholder="Nombre y Apellido"
                        value={formData[index].nombre}
                        onChange={(e) => handleChange(index, 'nombre', e.target.value)}
                    />
                </div>
            </label>
            <label className="block text-sm font-medium mb-1">
                <p className='text-xs pl-2 text-stone-400'>Telefono*</p>
                <div className='relative flex items-center text-violet-600 focus-within::text-violet-800 rounded-md border-violet-600'>
                    <LocalPhoneIcon className='w-5 h-5 absolute ml-2 mt-1' />
                    <input
                        type="number"
                        className="block w-full mt-1 rounded-md pl-10 p-3 font-medium placeholder:text-stone-600"
                        placeholder="1140578934"
                        value={formData[index].telefono}
                        onChange={(e) => handleChange(index, 'telefono', e.target.value)}
                    />
                </div>
            </label>
            <div className='flex flex-row items-center justify-start'>
                <label className="block text-sm font-medium mb-1">
                    <p className='text-xs pl-2 text-stone-400'>Dni*</p>
                    <div className='relative flex items-center text-violet-600 focus-within::text-violet-800 rounded-md border-violet-600'>
                        <AssignmentIndIcon className='w-5 h-5 absolute ml-2 mt-1' />
                        <input
                            type="number"
                            className="block w-full mt-1 rounded-md pl-10 p-3 font-medium placeholder:text-stone-600"
                            placeholder="N° Dni"
                            value={formData[index].dni}
                            onChange={(e) => handleChange(index, 'dni', e.target.value)}
                        />
                    </div>
                </label>
                <label className="block text-sm font-medium mb-1 pl-7">
                    <p className='text-xs pl-2 text-stone-400'>Instagram*</p>
                    <div className='relative flex items-center text-violet-600 focus-within::text-violet-800 rounded-md border-violet-600'>
                        <InstagramIcon className='w-5 h-5 absolute ml-2 mt-1' />
                        <input
                            type="text"
                            className="block w-full mt-1 rounded-md pl-10 p-3 font-medium placeholder:text-stone-600"
                            placeholder="Instagram"
                            value={formData[index].instagram}
                            onChange={(e) => handleChange(index, 'instagram', e.target.value)}
                        />
                    </div>
                </label>
            </div>
        </div>
    ));

    return (
        <div className='flex flex-col items-center justify-center p-4 w-full'>
            <div>
                <h1 className='pl-4'>Informacion Tickets</h1>
            </div>
            <form className='flex items-center flex-col w-full md:max-w-screen-md' onSubmit={handleSubmit}>
                {formFields}
                <div className="flex flex-row items-center justify-between p-4 bg-pink-800 rounded-xl mt-2 w-full">
                    <div className='flex flex-col items-center pl-5'>
                        <ContadorTotal
                            contador={contador}
                            total={total}
                            animateTotal={animateTotal}
                            formatCurrency={(value) => value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 })}
                            servicioWeb={servicioWeb}
                        />
                    </div>
                    <div className='pr-5'>
                        <button type="submit" className='bg-violet-600 rounded-full py-3 px-4'>Pagar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Pago;
