import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListadoGastos from "./components/ListadoGastos"
import Modal from "./components/Modal";
import { generarUUIDv4 } from "./helpers";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [cantidadDisponible, setCantidadDisponible] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [abrirModal, setAbrirModal] = useState(false);
  const [tipoModal, setTipoModal] = useState('');
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

    setGastos([ ...gastos, gasto ])
  }

  return (
    <div className={ abrirModal ? 'h-screen overflow-hidden' : '' }>
      <Header 
        cantidadDisponible={ cantidadDisponible }
        setAbrirModal={ setAbrirModal }
        setTipoModal={ setTipoModal }
      />

      { abrirModal && <Modal
        setAbrirModal={ setAbrirModal }
        tipoModal={ tipoModal }
        setTipoModal={ setTipoModal }
        setCantidadDisponible={ setCantidadDisponible }
        presupuesto={ presupuesto }
        setPresupuesto={ setPresupuesto }
        guardarGasto={ guardarGasto }
      /> }

      <ListadoGastos
        gastos={ gastos }
      />
      <Footer />
    </div>
  )
}

export default App
