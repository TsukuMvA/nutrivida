
import { Navigate } from "react-router-dom";

function RutaProtegida({ children }) {
  const sesion = localStorage.getItem("sesionNutriVida");

  if (sesion !== "activa") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RutaProtegida;
