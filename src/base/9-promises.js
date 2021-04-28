import { getHeroeById } from "./8-exports-imports";

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroeById(id);
      if (!hero) {
        reject("No se pudo econtrar el heroe");
      }
      resolve(hero);
      //reject("No se pudo econtrar el heroe");
    }, 1200);
  });
};

//getHeroeByIdAsync(1).then(console.log).catch(console.warn);
