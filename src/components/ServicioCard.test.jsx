
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicioCard from "./ServicioCard";

describe("Pruebas del componente ServicioCard", () => {

  it("Debe mostrar el título del servicio", () => {
    render(
      <ServicioCard
        titulo="Evaluación nutricional"
        descripcion="Consulta personalizada"
      />
    );

    expect(
      screen.getByText("Evaluación nutricional")
    ).toBeInTheDocument();
  });

  it("Debe mostrar la descripción del servicio", () => {
    render(
      <ServicioCard
        titulo="Planes alimenticios"
        descripcion="Plan de alimentación personalizado"
      />
    );

    expect(
      screen.getByText("Plan de alimentación personalizado")
    ).toBeInTheDocument();
  });

});
