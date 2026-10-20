
import { describe, it, expect } from "vitest";
import { sumar } from "./calculos.js";

describe("Pruebas de la función sumar", () => {

  it("Debe sumar correctamente dos números", () => {
    expect(sumar(2, 3)).toBe(5);
  });

});
