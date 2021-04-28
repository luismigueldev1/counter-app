describe("Pruebas para demo.test.js", () => {
  test("debe de ser iguales lo strings ", () => {
    //1. Inicialización
    const mensaje = "Hola Mundo";

    //2. Estimulo
    const mensaje2 = `Hola Mundo`;

    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
