
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Admin from "./Admin";

const navegarMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const original = await vi.importActual("react-router-dom");

  return {
    ...original,
    useNavigate: () => navegarMock,
  };
});

describe("Pruebas del panel administrativo", () => {
  beforeEach(() => {
    localStorage.clear();
    navegarMock.mockClear();
  });

  it("muestra el título del panel administrativo", () => {
    render(
      <MemoryRouter>
        <Admin />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "Panel de administración",
      })
    ).toBeInTheDocument();
  });

  it("muestra las secciones administrativas", () => {
    render(
      <MemoryRouter>
        <Admin />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Pacientes" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Servicios" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Consultas" })
    ).toBeInTheDocument();
  });

  it("elimina la sesión al cerrar sesión", () => {
    localStorage.setItem("sesionNutriVida", "activa");

    render(
      <MemoryRouter>
        <Admin />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Cerrar sesión" })
    );

    expect(
      localStorage.getItem("sesionNutriVida")
    ).toBeNull();

    expect(navegarMock).toHaveBeenCalledWith("/login", {
      replace: true,
    });
  });
});
