
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Pruebas de integración de NutriVida", () => {

  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("Debe mostrar la página de inicio al ingresar", () => {
    render(<App />);

    expect(
      screen.getByText("Bienvenido a NutriVida")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Inicio" })
    ).toBeInTheDocument();
  });

  it("Debe navegar a la página de servicios", () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole("link", { name: "Servicios" })
    );

    expect(
      screen.getByText("Nuestros servicios nutricionales")
    ).toBeInTheDocument();
  });

  it("Debe mostrar el encabezado y pie de página", () => {
    render(<App />);

    expect(
      screen.getByText("🌿 NutriVida")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Comprometidos con tu bienestar.")
    ).toBeInTheDocument();
  });

  it("Debe permitir navegar desde Inicio a Servicios", () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole("link", {
        name: "Conoce nuestros servicios"
      })
    );

    expect(
      screen.getByText("Nuestros servicios nutricionales")
    ).toBeInTheDocument();
  });

});
