
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar navbar-expand-md bg-white shadow-sm">
      <div className="container">

        <NavLink className="navbar-brand fw-bold text-success" to="/">
          🌿 NutriVida
        </NavLink>

        <nav className="d-flex flex-wrap gap-3">
          <NavLink className="nav-link" to="/">
            Inicio
          </NavLink>

          <NavLink className="nav-link" to="/servicios">
            Servicios
          </NavLink>

          <a className="nav-link" href="#contacto">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Header;
