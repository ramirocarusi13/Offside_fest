// Main.jsx
import React, { useState } from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import InstagramIcon from '@material-ui/icons/Instagram';
import HeadsetIcon from '@material-ui/icons/Headset';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContadorTotal from '../components/ContadorTotal'; // Importa el nuevo componente
import Footer from '../components/Footer';

export const formatCurrency = (value) => {
    return value.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
    });
};

const Main = () => {
    const [contador, setContador] = useState(0);
    const [total, setTotal] = useState(0);
    const [servicioWeb, setServicioWeb] = useState(0);
    const [animate, setAnimate] = useState('');
    const [animateTotal, setAnimateTotal] = useState('');
    const navigate = useNavigate();

    const handlePagarClick = () => {
        if (contador === 0) {
            toast.error('Por favor, seleccione cuántas entradas desea.');
        } else {
            navigate(`formPago/${contador}`);
        }
    };


    const incrementarContador = () => {
        const newContador = contador + 1;
        const newServicioWeb = newContador * 300;
        const newTotal = (newContador * 6000) + newServicioWeb;

        setContador(newContador);
        setServicioWeb(newServicioWeb);
        setTotal(newTotal);
        setAnimate('animate-increment');
        setAnimateTotal('animate-increment');
        setTimeout(() => setAnimate(''), 300);
        setTimeout(() => setAnimateTotal(''), 300);
    };

    const decrementarContador = () => {
        if (contador > 0) {
            const newContador = contador - 1;
            const newServicioWeb = newContador * 300;
            const newTotal = (newContador * 6000) + newServicioWeb;

            setContador(newContador);
            setServicioWeb(newServicioWeb);
            setTotal(newTotal);
            setAnimate('animate-decrement');
            setAnimateTotal('animate-decrement');
            setTimeout(() => setAnimate(''), 300);
            setTimeout(() => setAnimateTotal(''), 300);
        }
    };

    

    return (
        <div className="flex flex-col items-center p-4 w-full ">
            <div className='md:flex md:flex-row max-w-screen-xl'>
                <div className=" rounded w-full pb-4 mb-4 bg-gray bg-[url('/banner-desenfocado.png')] bg-cover bg-center ">
                    <img className="w-full rounded-md p-2" src="./BANNER-OFFSIDE-PARA-PAGINA.jpg" alt="Festival Banner" />
                    <h1 className="text-lg font-bold pt-2 pl-6">OFFSIDE | FESTIVAL</h1>
                    <h2 className="text-sm font-semibold pl-6">10 de Agosto de 2024 de 00:30Hs a 06:00Hs</h2>
                    <p className="text-xs font-extralight pl-6">Mercedes, Buenos Aires</p>
                    <p className='text-sm pl-6 pt-3'>📀 LineUP</p>
                    <ul className="list-none pl-6">
                        <li className="text-sm font-medium pt-5">LAALO DJ</li>
                        <li className="text-sm font-medium pt-1">DJ RUGG</li>
                        <li className="text-sm font-medium pt-1">DJ SANTAA</li>
                        <li className="text-sm font-medium pt-1 ">DJ ALE ORIO</li>
                        <li className="text-sm font-medium pt-1 pb-2">DJ GONZA HILDT</li>
                    </ul>
                    <div className="flex justify-end pr-4">
                        <a href="https://www.instagram.com/" className="flex items-center hover:bg-purple-800 text-white font-light text-base py-2 px-2 rounded-full">
                            <InstagramIcon fontSize="small" />
                        </a>
                    </div>
                </div>

                <div className="w-full">
                    <div className="bg-blue-900 rounded-lg m-4 p-1">
                        <h2 className="font-semibold">PREVENTA 1 🔥 </h2>
                        <div className="grid grid-cols-2 items-center">
                            <div className="flex items-center">
                                <button className={`bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${animate}`}>
                                    {contador}
                                </button>
                                <h1 className="pl-5 text-xl font-bold">{formatCurrency(6000)}</h1>
                            </div>
                            <div className="flex items-center justify-end">
                                <button onClick={decrementarContador} className="bg-blue-950 hover:bg-blue-700 text-white font-light py-2 px-4 m-2 rounded-full">-</button>
                                <button onClick={incrementarContador} className="bg-blue-950 hover:bg-blue-700 text-white font-light py-2 px-4 rounded-full">+</button>
                            </div>
                            <h4 className="text-xs text-slate-400 col-span-2 p-1">
                                <ErrorIcon className="pb-1" fontSize="small" /> Ingreso sin consumición. Válido hasta las 3AM
                            </h4>
                        </div>
                    </div>
                    <div className="bg-lime-700 mt-4 m-4 opacity-25 rounded-lg p-1">
                        <h2 className="font-semibold">PREVENTA 2</h2>
                        <div className="grid grid-cols-2 items-center">
                            <div className="flex items-center">
                                <button className={`bg-lime-950 text-white font-bold py-2 px-4 rounded-full ${animate}`}>
                                    0
                                </button>
                                <h1 className="pl-5 text-xl font-bold">{formatCurrency(7000)}</h1>
                            </div>
                            <div className="flex items-center justify-end">
                                <button className="bg-lime-950 text-white font-light py-2 px-4 m-2 rounded-full">-</button>
                                <button className="bg-lime-950  text-white font-light py-2 px-4 rounded-full">+</button>
                            </div>
                            <h4 className="text-xs text-slate-400 col-span-2 p-1">
                                <ErrorIcon className="pb-1" fontSize="small" /> Ingreso sin consumición. Válido hasta las 3AM
                            </h4>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full md: flex flex-col max-w-screen-md items-center'>
                <h1 className="font-semibold text-xl p-7">
                    NUESTRA <span className="text-blue-600">PLAYLIST 🔥 </span>
                </h1>

                <iframe
                    style={{ borderRadius: '12px' }} // Cambiado a un objeto
                    allowFullScreen={true} // Corregido a camelCase
                    src="https://open.spotify.com/embed/playlist/6z1ilHP6gILcdJT1ET7Vkf?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>


            </div>

            <div className='md: flex max-w-screen-md'>
                <div className="flex flex-col items-center w-full">
                    <h1 className="font-semibold text-xl p-7">
                        DJ'S <span className="text-purple-600">PLAYLIST <HeadsetIcon /></span>
                    </h1>
                    <div className="flex flex-row items-center bg-black mb-2">
                        <a href="https://open.spotify.com/intl-es/artist/06dak3veVkev0ZvQrWPh1V?si=HYaq-OjjQZeATwekuiyVCg">
                            <img src="./banner-djlaalo.png" alt="DJ Laalo" />
                        </a>
                    </div>
                    <div className="flex flex-row items-center bg-black mb-2">
                        <a href="https://open.spotify.com/intl-es/artist/6K7PNZlKTdxYSYPVbgt52p?si=0FaMXWN6QSCss1Myd7_tMQ">
                            <img src="./banner-djrugg.png" alt="DJ Rugg" />
                        </a>
                    </div>
                    <div className="flex flex-row items-center bg-black mb-2">
                        <a href="https://open.spotify.com/intl-es/artist/068E65n4GrnZLh7vEJtxqS?si=_ZRpiBXYSc2fUGZl2JU8Cw">
                            <img src="./banner-djsanta.png" alt="DJ Santa" />
                        </a>
                    </div>
                </div>


            </div>
            <div className="flex flex-col items-center p-4  w-full ">
                {/* Contenido del componente */}
                <div className=" fixed bottom-0 w-full  bg-inherit p-4  bg-violet-950  rounded-lg  flex flex-row justify-between items-center max-w-screen-md">
                    <ContadorTotal
                        contador={contador}
                        total={total}
                        animateTotal={animateTotal}
                        formatCurrency={formatCurrency}
                        servicioWeb={servicioWeb}
                    />
                    <div>
                        <button onClick={handlePagarClick} className='bg-pink-800 rounded-full py-3 px-4'>PAGAR</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>




        </div >
    );
};

export default Main;
