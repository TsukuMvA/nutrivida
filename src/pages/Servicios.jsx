
import { useState } from "react";
import ServicioCard from "../components/ServicioCard";

function Servicios() {

  const [busqueda, setBusqueda] = useState("");

  const servicios = [
    {
      id: 1,
      titulo: "Evaluación nutricional",
      descripcion: "Conoce tu estado nutricional mediante una evaluación personalizada."
    },
    {
      id: 2,
      titulo: "Planes alimenticios",
      descripcion: "Recibe orientación alimentaria adaptada a tus necesidades."
    },
    {
      id: 3,
      titulo: "Seguimiento nutricional",
      descripcion: "Realiza un seguimiento de tus avances y objetivos nutricionales."
    }
  ];

  const serviciosFiltrados = servicios.filter((servicio) =>
    servicio.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="container py-5">

      <h2 className="text-center mb-3">
        Nuestros servicios nutricionales
      </h2>

      <p className="text-center mb-4">
        Conoce los servicios que ofrecemos en NutriVida.
      </p>

      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar servicio..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {serviciosFiltrados.map((servicio) => (
          <div className="col-12 col-md-6 col-lg-4" key={servicio.id}>
            <ServicioCard
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
            />
          </div>
        ))}
      </div>

      {serviciosFiltrados.length === 0 && (
        <p className="text-center mt-4">
          No se encontraron servicios.
        </p>
      )}

    </main>
  );
}

export default Servicios;
