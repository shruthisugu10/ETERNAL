import { Routes, Route } from "react-router-dom"
import Home from "./component/home"
import About from "./component/about"
import Contact from "./component/contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App
