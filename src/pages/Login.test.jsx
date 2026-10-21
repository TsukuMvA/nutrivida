
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

const navegarMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const original = await vi.importActual("react-router-dom");

  return {
    ...original,
    useNavigate: () => navegarMock,
  };
});

describe("Pruebas de Login", () => {
  beforeEach(() => {
    localStorage.clear();
    navegarMock.mockClear();
  });

  it("muestra el formulario de inicio de sesión", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Iniciar sesión" })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Correo electrónico")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Contraseña")
    ).toBeInTheDocument();
  });

  it("muestra error cuando los campos están vacíos", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Iniciar sesión" })
    );

    expect(
      screen.getByText("Todos los campos son obligatorios.")
    ).toBeInTheDocument();
  });

  it("muestra error cuando el correo es inválido", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "correo-invalido" },
    });

    fireEvent.change(screen.getByLabelText("Contraseña"), {
      target: { value: "Admin123" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Iniciar sesión" })
    );

    expect(
      screen.getByText("Ingresa un correo electrónico válido.")
    ).toBeInTheDocument();
  });

  it("muestra error cuando las credenciales son incorrectas", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "usuario@correo.cl" },
    });

    fireEvent.change(screen.getByLabelText("Contraseña"), {
      target: { value: "ClaveIncorrecta" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Iniciar sesión" })
    );

    expect(
      screen.getByText("Correo o contraseña incorrectos.")
    ).toBeInTheDocument();

    expect(
      localStorage.getItem("sesionNutriVida")
    ).toBeNull();
  });

  it("guarda la sesión y redirige al administrador", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "admin@nutrivida.cl" },
    });

    fireEvent.change(screen.getByLabelText("Contraseña"), {
      target: { value: "Admin123" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Iniciar sesión" })
    );

    expect(
      localStorage.getItem("sesionNutriVida")
    ).toBe("activa");

    expect(navegarMock).toHaveBeenCalledWith("/admin", {
      replace: true,
    });
  });
});
