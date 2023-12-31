import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatearNumero } from "../helpers";
import Alerta from "./Alerta";

function Modal({
    cantidadDisponible,
    guardarGasto,
    gastoEditar,
    animarModal,
    closeModal
}) {
    const [concepto, setConcepto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [cantidadStr, setCantidadStr] = useState('');
    const [disponibleAux, setDisponibleAux] = useState(cantidadDisponible);
    const [tipo, setTipo] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        if(Object.keys(gastoEditar).length) {
            setConcepto(gastoEditar.concepto);
            setCantidad(gastoEditar.cantidad);
            setCantidadStr( formatearNumero(gastoEditar.cantidad.toFixed(2)) )
            setTipo(gastoEditar.tipo);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);

            if(gastoEditar.tipo === 'egreso') {
                setDisponibleAux( cantidadDisponible + gastoEditar.cantidad )
            } else {
                setDisponibleAux( cantidadDisponible - gastoEditar.cantidad )
            }
        }
    }, [gastoEditar, cantidadDisponible]);

    // Asignar la cantidad al state "cantidad" con tipo de dato Number.
    useEffect(() => {
        const cantidadSinComas = Number( cantidadStr.replaceAll(',', '') );
        setCantidad(cantidadSinComas);
    }, [cantidadStr])

    const handleSubmit = e => {
        e.preventDefault();

        if( [concepto, cantidad, tipo].includes('') ) {
            setError('Todos los campos son obligatorios');
            return;
        } 
        
        if( !Number(cantidad) || Number(cantidad) <= 0 ) {
            setError('Ingresa una cantidad válida');
            return;
        }

        if( tipo === 'egreso' && (id && cantidad > disponibleAux || !id && cantidad > cantidadDisponible) ) {
            setError('No tienes dinero suficiente para realizar el gasto');
            return;
        }

        setError('');
        guardarGasto({ concepto, cantidad, tipo, id, fecha });
        closeModal();
    }

    return ( 
        <div className={`h-screen bg-white fixed top-0 bottom-0 left-0 right-0 px-4 py-8 flex flex-col items-center transition-all ease-in-out duration-300 ${animarModal ? 'translate-y-0' : '-translate-y-full'}`}>

            <FontAwesomeIcon
                icon={ faXmark }
                style={ { color: '#0f172a' } }
                className="p-2 h-5 w-5 md:h-6 md:w-6 bg-slate-100 hover:bg-slate-200 transition-all rounded-full cursor-pointer fixed top-5 right-5 md:top-10 md:right-10"
                onClick={ () => closeModal() }
            />

            <div className="w-full md:max-w-xl mt-12">
                <h1 className="font-black text-3xl sm:text-5xl text-center mb-3">
                    { Object.keys(gastoEditar).length ? 'Editar registro' : 'Crear nuevo registro' }
                </h1>

                { error && <Alerta mensaje={ error } /> }

                <form onSubmit={ handleSubmit } className="my-6">
                    <div className="flex flex-col gap-4 mb-5">
                        <label htmlFor="concepto" className="font-bold">Concepto</label>

                        <input
                            type="text"
                            name="concepto"
                            id="concepto"
                            placeholder="Spotify"
                            value={ concepto }
                            onChange={ e => setConcepto(e.target.value) }
                            className="p-2 rounded-md border border-slate-300 focus:outline-0 focus:border-slate-600 transition-all w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-4 mb-5">
                        <label htmlFor="cantidad" className="font-bold">Cantidad</label>

                        <div className="w-full relative">
                            <span className="text-slate-500 ml-4 absolute top-1/2 -translate-x-1/2 -translate-y-1/2">$</span>
                            <input
                                type="text"
                                name="cantidad"
                                id="cantidad"
                                placeholder="0.00"
                                value={ cantidadStr }
                                onChange={ e => setCantidadStr( formatearNumero(e.target.value) ) }
                                className="p-2 pl-7 rounded-md border border-slate-300 focus:outline-0 focus:border-slate-600 transition-all w-full"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-8 mb-5">
                        <label htmlFor="tipo" className="font-bold">Tipo</label>

                        <select
                            name="tipo"
                            id="tipo"
                            value={ tipo }
                            onChange={ e => setTipo(e.target.value) }
                            className="p-2 rounded-md border border-slate-300 focus:outline-0 focus:border-slate-600 transition-all flex-1"
                        >
                            <option value="">Seleccionar...</option>
                            <option value="ingreso">Ingreso</option>
                            <option value="egreso">Egreso</option>
                        </select>
                    </div>

                    <input
                        type="submit"
                        className="bg-slate-900 text-white p-2 mt-3 rounded hover:bg-slate-800 cursor-pointer transition-all w-full"
                        value="Guardar"
                    />
                </form>
            </div>
        </div>
     );
}

export default Modal;