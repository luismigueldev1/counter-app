import { getHeroeById, getHeroesByOwner } from "../../base/8-exports-imports";
import heroes from "../../data/heroes";

describe("Pruebas en funciones heroes", () => {
  test("debe retornar un heroe ", () => {
    const id = 2;
    const heroe = getHeroeById(id);

    const heroesData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroesData);
  });

  test("debe retornar undefined si no existe ", () => {
    const id = 20;
    const heroe = getHeroeById(id);

    //const heroesData = heroes.find((h) => h.id === id);

    expect(heroe).toBe(undefined);
  });
  test("debe retornar un arreglo con los heroes de DC ", () => {
    //debe retornar un arreglo con los heroes de DC
    //toEqual al arreglo filtrado

    const owner = "DC";
    const heroesArrayTest = heroes.filter((hero) => hero.owner === owner);
    const heroesArray = getHeroesByOwner(owner);
    expect(heroesArray).toEqual(heroesArrayTest);
  });

  test("debe retornar un arreglo con los heroes de marvel ", () => {
    //debe retornar un arreglo con los heros de marvel
    //lenght= 2

    const owner = "Marvel";
    const heroesArray = getHeroesByOwner(owner);
    expect(heroesArray).toHaveLength(2);
  });
});
