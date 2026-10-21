
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("sesionNutriVida");
    navigate("/login", { replace: true });
  };

  return (
    <main className="container py-5">
      <h2 className="text-center mb-4">
        Panel de administración
      </h2>

      <p className="text-center mb-4">
        Bienvenido al panel administrativo de NutriVida.
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                Pacientes
              </h5>

              <p className="card-text">
                Sección destinada a la gestión de pacientes.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                Servicios
              </h5>

              <p className="card-text">
                Sección destinada a la administración
                de servicios nutricionales.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                Consultas
              </h5>

              <p className="card-text">
                Sección destinada a revisar las consultas
                recibidas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <button
          type="button"
          className="btn btn-danger"
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </button>
      </div>
    </main>
  );
}

export default Admin;
