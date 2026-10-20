
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
