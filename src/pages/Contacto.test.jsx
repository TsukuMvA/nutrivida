
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Contacto from "./Contacto";

describe("Pruebas del formulario de Contacto", () => {

  it("Debe mostrar los campos del formulario", () => {
    render(<Contacto />);

    expect(
      screen.getByLabelText("Nombre")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Correo electrónico")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Mensaje")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Enviar mensaje" })
    ).toBeInTheDocument();
  });

  it("Debe mostrar un error si los campos están vacíos", () => {
    render(<Contacto />);

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(
      screen.getByRole("alert")
    ).toHaveTextContent("Todos los campos son obligatorios.");
  });

  it("Debe mostrar un error si el correo no es válido", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Camila" },
    });

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "correo-invalido" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "Necesito información nutricional" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(
      screen.getByRole("alert")
    ).toHaveTextContent("Ingresa un correo electrónico válido.");
  });

  it("Debe mostrar una confirmación si los datos son correctos", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Camila" },
    });

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "camila@gmail.com" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "Quiero conocer los servicios" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(
      screen.getByRole("status")
    ).toHaveTextContent("Tu consulta fue registrada correctamente.");
  });

  it("Debe limpiar los campos después de un envío válido", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Camila" },
    });

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "camila@gmail.com" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "Solicito una evaluación nutricional" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(screen.getByLabelText("Nombre")).toHaveValue("");
    expect(screen.getByLabelText("Correo electrónico")).toHaveValue("");
    expect(screen.getByLabelText("Mensaje")).toHaveValue("");
  });

});
