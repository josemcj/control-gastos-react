import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListadoGastos from "./components/ListadoGastos"
import Modal from "./components/Modal";
import DefinirPresupuesto from "./components/DefinirPresupuesto";
import { generarUUIDv4 } from "./helpers";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [cantidadDisponible, setCantidadDisponible] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [abrirModal, setAbrirModal] = useState(false);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});

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

  return (
    <div className={ abrirModal ? 'h-screen overflow-hidden' : '' }>
      {
        isValidPresupuesto ? (
          <>
            <Header 
              cantidadDisponible={ cantidadDisponible }
              setAbrirModal={ setAbrirModal }
              setPresupuesto={ setPresupuesto }
              setGastos={ setGastos }
              setIsValidPresupuesto={ setIsValidPresupuesto }
            />

            { abrirModal && <Modal
              setAbrirModal={ setAbrirModal }
              cantidadDisponible={ cantidadDisponible }
              guardarGasto={ guardarGasto }
              gastoEditar={ gastoEditar }
              setGastoEditar={ setGastoEditar }
            /> }

            <ListadoGastos
              gastos={ gastos }
              setGastoEditar={ setGastoEditar }
              eliminarGasto={ eliminarGasto }
              setAbrirModal={ setAbrirModal }
            />
            <Footer />
          </>
        ) : (
          <DefinirPresupuesto
            presupuesto={ presupuesto }
            setPresupuesto={ setPresupuesto }
            setIsValidPresupuesto={ setIsValidPresupuesto }
          />
        )
      }
    </div>
  )
}

export default App
