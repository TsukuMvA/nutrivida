
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import RutaProtegida from "./RutaProtegida";

describe("Pruebas de RutaProtegida", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("permite el acceso cuando la sesión está activa", () => {
    localStorage.setItem("sesionNutriVida", "activa");

    render(
      <MemoryRouter initialEntries={["/admin"]}>
        <Routes>
          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <h1>Panel privado</h1>
              </RutaProtegida>
            }
          />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Panel privado")
    ).toBeInTheDocument();
  });

  it("redirige a Login cuando no existe una sesión", () => {
    render(
      <MemoryRouter initialEntries={["/admin"]}>
        <Routes>
          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <h1>Panel privado</h1>
              </RutaProtegida>
            }
          />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Login")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Panel privado")
    ).not.toBeInTheDocument();
  });

  it("rechaza una sesión con un valor incorrecto", () => {
    localStorage.setItem("sesionNutriVida", "inactiva");

    render(
      <MemoryRouter initialEntries={["/admin"]}>
        <Routes>
          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <h1>Panel privado</h1>
              </RutaProtegida>
            }
          />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Login")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Panel privado")
    ).not.toBeInTheDocument();
  });
});
