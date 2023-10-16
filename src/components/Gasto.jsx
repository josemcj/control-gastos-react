function Gasto() {
    return ( 
        <div className="bg-white p-6 border grid grid-cols-5 grid-rows-2 my-auto gap-1">
            <h2 className="font-black text-xl md:text-3xl col-span-3 self-center">Suscripción a Spotify</h2>
            <p className="font-black text-xl md:text-3xl col-span-2 text-end self-center">$1,269.00</p>

            <div className="col-span-5 my-auto grid grid-cols-6 md:mt-1">
                <p className="font-bold col-span-2 sm:col-span-4 self-center">Fecha: <span className="font-normal">12 de oct. de 2023</span></p>

                <div className="col-span-4 sm:col-span-2 place-self-end mt-1">
                    <button className="py-2 px-3 border border-gray-300 bg-gray-100 hover:bg-gray-300 transition-all rounded">Editar</button>
                    <button className="ml-1 py-2 px-4 bg-red-500 hover:bg-red-400 text-white transition-all rounded">Eliminar</button>
                </div>
            </div>
        </div>
     );
}

export default Gasto;