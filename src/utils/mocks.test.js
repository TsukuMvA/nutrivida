
import { describe, it, expect, vi } from "vitest";

describe("Pruebas con mocks", () => {

  it("Debe ejecutar una función simulada", () => {

    const funcionSimulada = vi.fn();

    funcionSimulada();

    expect(funcionSimulada).toHaveBeenCalled();

  });

  it("Debe recibir correctamente los datos", () => {

    const guardarReserva = vi.fn();

    guardarReserva("Ana", "Evaluación nutricional");

    expect(guardarReserva).toHaveBeenCalledWith(
      "Ana",
      "Evaluación nutricional"
    );

  });

});


describe("Pruebas con spies", () => {

  it("Debe comprobar que se ejecuta una función existente", () => {

    const reserva = {
      confirmar() {
        return "Reserva confirmada";
      }
    };

    const espia = vi.spyOn(reserva, "confirmar");

    const resultado = reserva.confirmar();

    expect(espia).toHaveBeenCalled();

    expect(resultado).toBe("Reserva confirmada");

    espia.mockRestore();

  });

});
