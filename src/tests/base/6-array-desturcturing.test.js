import "@testing-library/jest-dom";

import { returnArray } from "../../base/6-array-destructuring";

describe("Pruebas en 6-array-destructuring", () => {
  test("debe de retornar un string y un numero", () => {
    const [letras, numeros] = returnArray();

    //expect(array).toEqual(["ABC", 123]);
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
