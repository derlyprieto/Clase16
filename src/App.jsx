import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Beer from "./Pages/Beer"
import Contacto from "./Pages/Contacto"
import Home from "./Pages/Home"

function App() {
  return (
   <div>
     <Navbar/>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/beer/:id' element={<Beer/>}></Route>
      </Routes>
   </div>
  )
}

export default App
