const nombre = "Luis Miguel";
const apellido = "Rodriguez";

//const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} 
${apellido}
${1 + 1}
`;

//console.log(nombreCompleto);

export function getSaludo(nombre = "User") {
  return "Hola " + nombre;
}

//console.log(`Este es un texto: ${getSaludo()}`);
