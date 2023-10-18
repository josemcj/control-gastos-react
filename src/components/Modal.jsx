import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import FormModificarCantidad from "./FormModificarCantidad";
import FormNuevoGasto from "./FormNuevoGasto";

function Modal({ 
    setAbrirModal,
    tipoModal,
    setTipoModal,
    cantidadDisponible, 
    setCantidadDisponible,
    presupuesto, 
    setPresupuesto,
    guardarGasto
}) {
    const opcionesModal = { modificar: 'MODIFICAR' }

    // TODO: Animar modal al abrir y cerrar.

    /**
     * Reestablece a 'false' en state 'abrirModal' y 'tipoModal' a un string
     * vacío.
     */
    const handleCerraModal = () => {
        setAbrirModal(false);
        setTipoModal('');
    }

    return ( 
        <div className="h-screen bg-white fixed top-0 bottom-0 left-0 right-0 p-8">

            <FontAwesomeIcon
                icon={ faXmark }
                style={ { color: '#0f172a' } }
                className="p-2 h-5 w-5 md:h-6 md:w-6 bg-slate-100 hover:bg-slate-200 transition-all rounded-full cursor-pointer fixed top-5 right-5 md:top-10 md:right-10"
                onClick={ () => handleCerraModal() }
            />

            <div className="container flex flex-col md:w-3/5 mt-12">
                <h1 className="font-black text-3xl sm:text-5xl text-center mb-3">
                    { tipoModal === opcionesModal.modificar ? 'Modificar Cantidad' : 'Crear nuevo registro' }
                </h1>
                
                { tipoModal === opcionesModal.modificar ? (
                    <FormModificarCantidad
                        setAbrirModal={ setAbrirModal }
                        setTipoModal={ setTipoModal }
                        cantidadDisponible={ cantidadDisponible }
                        presupuesto={ presupuesto }
                        setPresupuesto={ setPresupuesto }
                    />
                ) : (
                    <FormNuevoGasto
                        guardarGasto={ guardarGasto }
                        setAbrirModal={ setAbrirModal }
                    />
                ) }

            </div>
        </div>
     );
}

export default Modal;