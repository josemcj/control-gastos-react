import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return ( 
        <header className="bg-slate-900 flex flex-col items-center px-4 py-28 mb-10">
            <div className="mb-10">
                <p className="text-white text-center font-medium text-xl sm:text-3xl mb-5">Disponible</p>
                <p className="text-white text-center font-black text-5xl sm:text-7xl">$12,980.90</p>
            </div>

            <div className="flex gap-6 sm:gap-8">
                <button className="py-2 sm:py-3 border-b border-b-white text-white hover:text-slate-200 hover:border-b-slate-200 transition-all">
                    Modificar cantidad
                    <FontAwesomeIcon icon={ faPenToSquare } className="ml-2" />
                </button>
                <button className="py-2 px-3 sm:py-3 sm:px-4 bg-white rounded text-slate-900 font-bold hover:bg-slate-200 transition-all">
                    Agregar gasto
                    <FontAwesomeIcon icon={ faPlus } className="ml-2" />
                </button>
            </div>
        </header>
     );
}

export default Header;