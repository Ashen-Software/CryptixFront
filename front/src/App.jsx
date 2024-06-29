import './App.css'
import Events from './views/Events/Events'
import Home from './views/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para el formulario de inicio de sesión */}
        <Route path="/Events" element={<Events />} /> {/* Ruta para el resto de la aplicación */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App