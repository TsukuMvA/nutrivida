
function ServicioCard({ titulo, descripcion }) {
  return (
    <div className="card h-100 shadow-sm tarjeta-servicio">

      <div className="card-body">
        <h3 className="card-title h5 text-success">
          {titulo}
        </h3>

        <p className="card-text">
          {descripcion}
        </p>
      </div>

    </div>
  );
}

export default ServicioCard;
