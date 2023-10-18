import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListadoGastos from "./components/ListadoGastos"
import Modal from "./components/Modal";
import { generarUUIDv4 } from "./helpers";
import DefinirPresupuesto from "./components/DefinirPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [cantidadDisponible, setCantidadDisponible] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [abrirModal, setAbrirModal] = useState(false);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

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
    gasto.id = generarUUIDv4();
    gasto.fecha = Date.now();

    setGastos([ ...gastos, gasto ]);
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
            /> }

            <ListadoGastos
              gastos={ gastos }
              eliminarGasto={ eliminarGasto }
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
