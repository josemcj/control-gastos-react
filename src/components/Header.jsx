import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatearCantidad } from "../helpers/index";

function Header({ 
    cantidadDisponible,
    setAbrirModal, 
    setTipoModal 
}) {

    const opcionesModal = { modificar: 'MODIFICAR' }

    /**
     * Abre un modal. La variable "tipo" debe ser la cadena "MODIFICAR" para
     * modificar la cantidad disponible. Si no se envia dicho argumento de
     * toma por defecto la creación de un nuevo ingreso/egreso.
     * @param {string} tipo 'MODIFICAR' o vacío.
     */
    const handleOnClick = (tipo = '') => {
        setAbrirModal(true);
        setTipoModal(tipo);
    }

    return ( 
        <header className="bg-slate-900 flex flex-col items-center px-4 py-28 mb-10">
            <div className="mb-10">
                <p className="text-white text-center font-medium text-xl sm:text-3xl mb-5">Disponible</p>
                <p className="text-white text-center font-black text-5xl sm:text-7xl">{ formatearCantidad(cantidadDisponible) }</p>
            </div>

            <div className="flex gap-6 sm:gap-8">
                <button
                    onClick={ () => handleOnClick() }
                    className="py-2 px-3 sm:py-3 sm:px-4 bg-white rounded text-slate-900 font-bold hover:bg-slate-200 transition-all"
                >
                    Agregar gasto
                    <FontAwesomeIcon icon={ faPlus } className="ml-2" />
                </button>

                <button 
                    onClick={ () => handleOnClick(opcionesModal.modificar) }
                    className="py-2 sm:py-3 border-b border-b-white text-white hover:text-slate-200 hover:border-b-slate-200 transition-all"
                >
                    Restaurar app
                    <FontAwesomeIcon icon={ faCircleExclamation } className="ml-2" />
                </button>
            </div>
        </header>
     );
}

export default Header;