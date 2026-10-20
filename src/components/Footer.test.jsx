
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Pruebas del componente Footer", () => {

  it("Debe mostrar el nombre de la clínica", () => {
    render(<Footer />);

    expect(
      screen.getByText("© 2026 Clínica Nutricional NutriVida")
    ).toBeInTheDocument();
  });

  it("Debe mostrar el mensaje de bienestar", () => {
    render(<Footer />);

    expect(
      screen.getByText("Comprometidos con tu bienestar.")
    ).toBeInTheDocument();
  });

  it("Debe tener el identificador de contacto", () => {
    const { container } = render(<Footer />);

    const piePagina = container.querySelector("footer");

    expect(piePagina).toHaveAttribute("id", "contacto");
  });

});
