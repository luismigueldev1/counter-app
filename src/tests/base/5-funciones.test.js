import "@testing-library/jest-dom";

import { getUser, getActiveUser } from "../../base/5-funciones";

describe("Pruebas en 5-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getActiveUser debe retornar un objeto", () => {
    const activeUser = "Luis Miguel";
    const userTest = {
      uid: "ABC123",
      username: activeUser,
    };

    const user = getActiveUser(activeUser);
    expect(user).toEqual(userTest);
  });
});
