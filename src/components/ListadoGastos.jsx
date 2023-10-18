import Gasto from "./Gasto";

function ListadoGastos({ gastos, eliminarGasto }) {

    /**
     * Invierte un arreglo sin mutar el original. Con esto, mostraremos al usuario
     * el último valor del arreglo 'gastos' como el primero en la lista de gastos (visualmente).
     * @param {array} arr Arreglo de gastos.
     * @returns Arreglo invertido.
     */
    const reverseArray = arr => arr.reduceRight((accumulator, currentValue) => [...accumulator, currentValue], []);

    const gastosInvertido = reverseArray(gastos);
    
    return ( 
        <main className="container">
            <h1 className="font-black text-3xl sm:text-4xl mb-10">Listado de ingresos y egresos</h1>

            { gastosInvertido.length ? (
                gastosInvertido.map(gasto => (
                    <Gasto
                        key={ gasto.id }
                        gasto={ gasto }
                        eliminarGasto={ eliminarGasto }
                    />
                ))
            ) : (
                <p className="font-bold text-slate-500 text-center text-lg my-24">No hay ingresos ni egresos para mostrar.</p>
            ) }
        </main>
     );
}

export default ListadoGastos;