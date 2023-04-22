import { Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Help } from "./pages/Help"
import Navbar from "./pages/Navbar";

function App() {

  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      
    </>
  );
}

export default App;