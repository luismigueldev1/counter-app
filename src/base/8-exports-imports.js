import heroes from "../data/heroes";
export const getHeroeById = (id) => heroes.find((hero) => hero.id === id);

export const getHeroesByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);

//console.log(getHeroeById(5));
//console.log(getHeroesByOwner("DC"));
