
import { describe, it, expect, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup
} from "@testing-library/react";

import Servicios from "./Servicios";

// Limpiar los componentes después de cada prueba
afterEach(() => {
  cleanup();
});

describe("Pruebas de la página Servicios", () => {

  it("Debe mostrar los tres servicios disponibles", () => {
    render(<Servicios />);

    expect(
      screen.getByText("Evaluación nutricional")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Planes alimenticios")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Seguimiento nutricional")
    ).toBeInTheDocument();
  });

  it("Debe filtrar los servicios al escribir en el buscador", () => {
    render(<Servicios />);

    const buscador = screen.getByPlaceholderText(
      "Buscar servicio..."
    );

    fireEvent.change(buscador, {
      target: { value: "Planes" }
    });

    expect(
      screen.getByText("Planes alimenticios")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Evaluación nutricional")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Seguimiento nutricional")
    ).not.toBeInTheDocument();
  });

  it("Debe mostrar un mensaje cuando no existen resultados", () => {
    render(<Servicios />);

    const buscador = screen.getByPlaceholderText(
      "Buscar servicio..."
    );

    fireEvent.change(buscador, {
      target: { value: "Servicio inexistente" }
    });

    expect(
      screen.getByText("No se encontraron servicios.")
    ).toBeInTheDocument();
  });

});
