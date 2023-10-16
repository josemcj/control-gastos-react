import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListadoGastos from "./components/ListadoGastos"
import Modal from "./components/Modal";

function App() {
  const [cantidadDisponible, setCantidadDisponible] = useState(0);
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <div className={ abrirModal ? 'h-screen overflow-hidden' : '' }>
      <Header 
        cantidadDisponible={ cantidadDisponible }
        setAbrirModal={ setAbrirModal }
      />
      { abrirModal && <Modal
        cantidadDisponible={ cantidadDisponible }
        setCantidadDisponible={ setCantidadDisponible }
        setAbrirModal={ setAbrirModal }
      /> }
      <ListadoGastos />
      <Footer />
    </div>
  )
}

export default App
