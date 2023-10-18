import { useState } from "react";

function FormNuevoGasto({ guardarGasto, setAbrirModal }) {
    const [concepto, setConcepto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [tipo, setTipo] = useState('');

    // TODO: Separar cantidadad en el input al escribir.

    const handleSubmit = e => {
        e.preventDefault();

        // TODO: Validar que sea los datos sean válidos.

        guardarGasto({ concepto, cantidad, tipo });
        setAbrirModal(false);
    }

    return ( 
        <>
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
                            type="number"
                            name="cantidad"
                            id="cantidad"
                            placeholder="Cantidad"
                            value={ cantidad ? cantidad : '' }
                            onChange={ e => setCantidad(Number(e.target.value)) }
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
                    className="bg-slate-900 text-white p-2 mt-4 rounded hover:bg-slate-800 cursor-pointer transition-all w-full"
                    value="Guardar"
                />
            </form>
        </>
     );
}

export default FormNuevoGasto;