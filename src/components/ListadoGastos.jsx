import Gasto from "./Gasto";

function ListadoGastos() {
    return ( 
        <main className="container mx-auto px-4 lg:px-52">
            <h1 className="font-black text-3xl sm:text-4xl mb-10">Listado de ingresos y egresos</h1>

            <Gasto />
        </main>
     );
}

export default ListadoGastos;