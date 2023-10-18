import Gasto from "./Gasto";

function ListadoGastos({ gastos }) {
    
    return ( 
        <main className="container">
            <h1 className="font-black text-3xl sm:text-4xl mb-10">Listado de ingresos y egresos</h1>

            { gastos.length ? (
                gastos.map(gasto => (
                    <Gasto
                        key={ gasto.id }
                        gasto={ gasto }
                    />
                ))
            ) : (
                <p className="font-bold text-slate-500 text-center text-lg my-24">No hay ingresos ni egresos para mostrar.</p>
            ) }
        </main>
     );
}

export default ListadoGastos;