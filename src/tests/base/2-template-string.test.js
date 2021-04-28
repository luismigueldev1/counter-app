import "@testing-library/jest-dom";

import { getSaludo } from "../../base/2-template-string";

describe("Pruebas en 2-template-string", () => {
  test("getSaludo debe retornar Hola Luis Miguel", () => {
    const nombre = "Luis Miguel";
    const saludo = getSaludo("Luis Miguel");
    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test("getSaludo debe retornar Hola User si no se le pasa argumentos a nombre", () => {
    const nombre = "User";
    const saludo = getSaludo();
    expect(saludo).toBe(`Hola ${nombre}`);
  });
});
