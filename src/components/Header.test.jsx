
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

afterEach(() => {
  cleanup();
});

describe("Pruebas del componente Header", () => {

  it("Debe mostrar el nombre de NutriVida", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/NutriVida/i)
    ).toBeInTheDocument();
  });

  it("Debe mostrar los enlaces de navegación", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: "Inicio" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Servicios" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Contacto" })
    ).toBeInTheDocument();
  });

  it("Debe tener las rutas correctas", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: "Inicio" })
    ).toHaveAttribute("href", "/");

    expect(
      screen.getByRole("link", { name: "Servicios" })
    ).toHaveAttribute("href", "/servicios");

    expect(
      screen.getByRole("link", { name: "Contacto" })
    ).toHaveAttribute("href", "#contacto");
  });

});
