import Navbar from "./Components/Navbar"
import Fests from "./pages/Fests"
import Home from "./pages/Home"
import About from "./pages/About"
import Pronite from "./pages/Pronite"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/fests" element={<Fests />} />
          <Route path="/pronite" element={<Pronite />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App