
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();

    setError("");

    if (correo.trim() === "" || contrasena.trim() === "") {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo.trim())) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    const correoAdmin = "admin@nutrivida.cl";
    const contrasenaAdmin = "Admin123";

    if (
      correo.trim() === correoAdmin &&
      contrasena === contrasenaAdmin
    ) {
      localStorage.setItem("sesionNutriVida", "activa");

      setCorreo("");
      setContrasena("");

      navigate("/admin", { replace: true });
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <main className="container py-5">
      <h2 className="text-center mb-4">
        Iniciar sesión
      </h2>

      <p className="text-center mb-4">
        Accede al panel de administración de NutriVida.
      </p>

      <form
        className="mx-auto"
        style={{ maxWidth: "450px" }}
        onSubmit={manejarEnvio}
        noValidate
      >
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo electrónico
          </label>

          <input
            type="email"
            id="correo"
            className="form-control"
            placeholder="Ingresa tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Contraseña
          </label>

          <input
            type="password"
            id="contrasena"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
        >
          Iniciar sesión
        </button>
      </form>
    </main>
  );
}

export default Login;
