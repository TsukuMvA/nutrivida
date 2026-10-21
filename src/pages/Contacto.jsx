
import { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    setError("");
    setExito("");

    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      mensaje.trim() === ""
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo.trim())) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    setExito("Tu consulta fue registrada correctamente.");

    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <main className="container py-5">
      <h2 className="text-center mb-4">
        Contacto
      </h2>

      <p className="text-center mb-4">
        ¿Tienes alguna consulta sobre nuestros servicios
        nutricionales? Envíanos un mensaje.
      </p>

      <form
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        onSubmit={manejarEnvio}
        noValidate
      >
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {exito && (
          <div className="alert alert-success" role="status">
            {exito}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>

          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

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
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>

          <textarea
            id="mensaje"
            className="form-control"
            rows="4"
            placeholder="Escribe tu consulta"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Enviar mensaje
        </button>
      </form>
    </main>
  );
}

export default Contacto;
