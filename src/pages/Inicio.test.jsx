
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Inicio from "./Inicio";

describe("Pruebas de la página Inicio", () => {

  it("Debe mostrar el mensaje principal de bienvenida", () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        "Tu bienestar comienza con una buena alimentación"
      )
    ).toBeInTheDocument();
  });

  it("Debe mostrar el nombre de NutriVida", () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Bienvenido a NutriVida")
    ).toBeInTheDocument();
  });

  it("Debe mostrar el enlace para conocer los servicios", () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: "Conoce nuestros servicios"
      })
    ).toBeInTheDocument();
  });

  it("El enlace debe dirigir a la página de servicios", () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: "Conoce nuestros servicios"
      })
    ).toHaveAttribute("href", "/servicios");
  });

});
