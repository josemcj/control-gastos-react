import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListadoGastos from "./components/ListadoGastos"
import Modal from "./components/Modal";
import DefinirPresupuesto from "./components/DefinirPresupuesto";
import { generarUUIDv4 } from "./helpers";

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem('gastos')) ?? []
  );
  const [cantidadDisponible, setCantidadDisponible] = useState(0);
  const [abrirModal, setAbrirModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto);
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [presupuesto, gastos]);

  useEffect(() => {
    if( Number(localStorage.getItem('presupuesto')) ) {
      setIsValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    const totalEgresosIngresos = gastos.reduce((total, gasto) => {
      if(gasto.tipo === 'ingreso') {
        return total + gasto.cantidad;
      } else {
        return total - gasto.cantidad;
      }
    }, 0);

    setCantidadDisponible( presupuesto + totalEgresosIngresos );
  }, [gastos, presupuesto]);

  const guardarGasto = gasto => {
    if(!gasto.id) {
      gasto.id = generarUUIDv4();
      gasto.fecha = Date.now();
  
      setGastos([ ...gastos, gasto ]);
    } else {
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
    }
  }

  /**
   * Elimina un gasto a partir de su ID.
   * @param {string} id ID del gasto a eliminar.
   */
  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }

  /**
   * Abre el modal para crear o editar un registro y añade "true" a la
   * variable "animarModal".
   */
  const openModal = () => {
    setAbrirModal(true);
    setTimeout(() => setAnimarModal(true), 0);
  }

  /**
   * Cierra el modal, añade la animación de cierre y si el objeto
   * "gastoEditar" tiene información, lo reestablece a un objeto vacío.
   */
  const closeModal = () => {
    setAnimarModal(false);
    setTimeout(() => setAbrirModal(false), 300);

    if(Object.keys(gastoEditar).length) {
      setTimeout(() => setGastoEditar({}), 300);
    }
  }

  return (
    <>
      {
        isValidPresupuesto ? (
          <div className={ abrirModal ? 'h-screen overflow-hidden' : '' }>
            <Header 
              cantidadDisponible={ cantidadDisponible }
              openModal={ openModal }
              setPresupuesto={ setPresupuesto }
              setGastos={ setGastos }
              setIsValidPresupuesto={ setIsValidPresupuesto }
            />

            { abrirModal && <Modal
              cantidadDisponible={ cantidadDisponible }
              guardarGasto={ guardarGasto }
              gastoEditar={ gastoEditar }
              animarModal={ animarModal }
              closeModal={ closeModal }
            /> }

            <ListadoGastos
              gastos={ gastos }
              setGastoEditar={ setGastoEditar }
              eliminarGasto={ eliminarGasto }
              openModal={ openModal }
            />
            <Footer />
          </div>
        ) : (
          <DefinirPresupuesto
            presupuesto={ presupuesto }
            setPresupuesto={ setPresupuesto }
            setIsValidPresupuesto={ setIsValidPresupuesto }
          />
        )
      }
      </>
  )
}

export default App
