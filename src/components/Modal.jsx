import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatearCantidad } from "../helpers";

function Modal({ cantidadDisponible, setCantidadDisponible, setAbrirModal }) {

    const [cantidad, setCantidad] = useState(cantidadDisponible);

    const handleSubmit = e => {
        e.preventDefault();

        console.log(formatearCantidad(cantidadDisponible))
        setAbrirModal(false);
    }

    return ( 
        <div className="h-screen bg-white fixed top-0 bottom-0 left-0 right-0 p-8">

            <FontAwesomeIcon
                icon={ faXmark }
                style={ { color: '#0f172a' } }
                className="p-2 h-5 w-5 md:h-6 md:w-6 bg-slate-100 hover:bg-slate-200 transition-all rounded-full cursor-pointer fixed top-5 right-5 md:top-10 md:right-10"
                onClick={ () => setAbrirModal(false) }
            />

            <div className="container mx-auto lg:px-52 flex flex-col md:w-3/5 mt-12">
                <h1 className="font-black text-3xl sm:text-5xl text-center mb-3">Modificar cantidad</h1>
                <p className="my-6">Actualmente tienes <span className="font-bold">{ formatearCantidad(cantidad) }</span>.</p>

                <form onSubmit={ handleSubmit }>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="cantidad" className="font-bold">Ingresa la nueva cantidad</label>

                        <div className="w-full relative">
                            <span className="text-slate-500 ml-4 absolute top-1/2 -translate-x-1/2 -translate-y-1/2">$</span>
                            <input
                                type="number"
                                name="cantidad"
                                id="cantidad"
                                placeholder="Cantidad"
                                value={ cantidadDisponible }
                                onChange={ e => setCantidadDisponible(Number(e.target.value)) }
                                className="p-2 pl-7 rounded-md border border-slate-300 focus:outline-0 focus:border-slate-600 transition-all w-full"
                            />
                        </div>
                    </div>
                    <input
                        type="submit"
                        className="bg-slate-900 text-white p-2 mt-4 rounded hover:bg-slate-800 cursor-pointer transition-all w-full"
                        value="Guardar"
                    />
                </form>
            </div>
        </div>
     );
}

export default Modal;