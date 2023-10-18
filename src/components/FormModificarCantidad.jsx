import { useState } from "react";
import { formatearCantidad } from "../helpers";

function FormModificarCantidad({ 
    setAbrirModal, 
    setTipoModal, 
    cantidadDisponible, 
    presupuesto,
    setPresupuesto
}) {
    const [cantidad, setCantidad] = useState(cantidadDisponible ? cantidadDisponible : presupuesto);

    // TODO: Separar cantidadad en el input al escribir.

    const handleSubmit = e => {
        e.preventDefault();

        //  TODO: Validar que sea una cantidad válida.
        
        setAbrirModal(false);
        setTipoModal('');
    }

    return ( 
        <>
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
                            value={ presupuesto ? cantidadDisponible : '' }
                            onChange={ e => setPresupuesto(Number(e.target.value)) }
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
        </>
     );
}

export default FormModificarCantidad;