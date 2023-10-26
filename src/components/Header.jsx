import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatearCantidad } from "../helpers/index";

function Header({ 
    cantidadDisponible,
    openModal,
    setPresupuesto,
    setGastos,
    setIsValidPresupuesto,
}) {
    /**
     * Reestablece el presupuesto en 0, los gastos a un areglo vacío y isValidPrespuesto
     * a false.
     */
    const handleResetApp = () => {
        const confirmacion = confirm('¿Estás seguro de restaurar la aplicación? Todo el contenido será eliminado.');

        if(confirmacion) {
            setPresupuesto(0);
            setGastos([]);
            setIsValidPresupuesto(false);
        }
    }

    return ( 
        <header className="bg-slate-900 flex flex-col items-center px-4 py-28 mb-10">
            <div className="mb-10">
                <p className="text-white text-center font-medium text-xl sm:text-3xl mb-5">Disponible</p>
                <p className="text-white text-center font-black text-5xl sm:text-7xl">{ formatearCantidad(cantidadDisponible) }</p>
            </div>

            <div className="flex gap-6 sm:gap-8">
                <button 
                    onClick={ () => handleResetApp() }
                    className="py-2 sm:py-3 border-b border-b-white text-white hover:text-slate-200 hover:border-b-slate-200 transition-all"
                >
                    Restaurar app
                    <FontAwesomeIcon icon={ faCircleExclamation } className="ml-2" />
                </button>

                <button
                    onClick={ () => openModal() }
                    className="py-2 px-3 sm:py-3 sm:px-4 bg-white rounded text-slate-900 font-bold hover:bg-slate-200 transition-all"
                >
                    Agregar gasto
                    <FontAwesomeIcon icon={ faPlus } className="ml-2" />
                </button>
            </div>
        </header>
     );
}

export default Header;