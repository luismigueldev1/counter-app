const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , char] = personajes;

//console.log(char);

export const returnArray = () => {
  return ["ABC", 123];
};

//const [letras, numeros] = returnArray();

//console.log(letras, numeros);

//Tarea
const usarEstado = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = usarEstado("goku");
//console.log(nombre);
//setNombre();
