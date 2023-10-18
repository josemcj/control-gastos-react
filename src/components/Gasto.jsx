import { formatearCantidad, formatearFecha } from "../helpers";

function Gasto({ gasto, eliminarGasto }) {

    const { id, concepto, cantidad, fecha, tipo } = gasto;

    return ( 
        <div className="bg-white p-6 border grid grid-cols-5 grid-rows-2 my-auto gap-1 mb-5">
            <h2 className="font-black text-xl md:text-3xl col-span-3 self-baseline md:self-center">{ concepto }</h2>
            <p
                className={ `font-black text-xl md:text-3xl col-span-2 text-end self-baseline md:self-center ${ tipo === 'ingreso' ? 'text-green-700' : 'text-red-700' }` }
            >
                { tipo === 'ingreso' ? `+${formatearCantidad(cantidad)}` : `-${formatearCantidad(cantidad)}` }
            </p>

            <div className="col-span-5 my-auto grid grid-cols-6 md:mt-1">
                <p className="font-bold col-span-2 sm:col-span-4 self-center">
                    Fecha: {''}
                    <span className="font-normal">
                        { formatearFecha(fecha) }
                    </span>
                </p>

                <div className="col-span-4 sm:col-span-2 place-self-end mt-1">
                    <button className="py-2 px-3 border border-gray-300 bg-gray-100 hover:bg-gray-300 transition-all rounded">Editar</button>

                    <button
                        onClick={ () => eliminarGasto(id) }
                        className="ml-1 py-2 px-4 bg-red-500 hover:bg-red-400 text-white transition-all rounded"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Gasto;