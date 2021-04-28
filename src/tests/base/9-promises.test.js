import { getHeroeByIdAsync } from "../../base/9-promises";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  test("getHeroeByIdAsync debe retornar un Heroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
  test("getHeroeByIdAsync debe retornar error si el heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo econtrar el heroe");
      done();
    });
  });
});
