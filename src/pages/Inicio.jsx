
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <main>
      <section className="bienvenida">
        <h2>
          Tu bienestar comienza con una buena alimentación
        </h2>

        <p>
          En Clínica Nutricional NutriVida te ayudamos
          a mejorar tus hábitos alimenticios y
          alcanzar tus objetivos de salud.
        </p>

        <Link to="/servicios" className="boton">
          Conoce nuestros servicios
        </Link>
      </section>

      <section className="servicios">
        <h2>Bienvenido a NutriVida</h2>

        <p>
          Nuestro objetivo es acompañarte en el
          desarrollo de hábitos alimenticios saludables.
        </p>
      </section>
    </main>
  );
}

export default Inicio;
