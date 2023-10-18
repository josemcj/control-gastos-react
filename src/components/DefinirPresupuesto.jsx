function DefinirPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {

    const handleSubmit = e => {
        e.preventDefault()

        if( !presupuesto || presupuesto < 0 ) {
            // TODO: Alerta de presupuesto no válido
            return;
        }

        setIsValidPresupuesto(true);
    }

    return ( 
        <div className="bg-slate-900 h-screen px-4 flex flex-col items-center justify-center">
            <h1 className="font-black text-3xl sm:text-5xl mb-7 text-white text-center">Define un presupuesto</h1>

            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="presupuesto"
                    placeholder="1000"
                    className="bg-transparent text-center text-2xl md:text-3xl text-white border-b border-slate-500 py-2 focus:outline-none focus:outline-0 focus:border-white transition-all w-full"
                    onChange={ e => setPresupuesto( Number(e.target.value) ) }
                />

                <input 
                    type="submit" 
                    value="Guardar"
                    className="text-slate-900 bg-white p-2 mt-7 rounded w-full hover:bg-slate-200 cursor-pointer transition-all"
                />
            </form>
        </div>
     );
}

export default DefinirPresupuesto;