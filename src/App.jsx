
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import RutaProtegida from "./components/RutaProtegida";

import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <Admin />
              </RutaProtegida>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
