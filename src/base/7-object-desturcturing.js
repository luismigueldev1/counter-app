const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const { nombre: nombre2 } = persona;
//console.log(nombre2);

const usoContexto = ({ clave, nombre, edad, rango = "Soldado Razo" }) => {
  //console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1212,
      lng: -5.1214,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = usoContexto(persona);

console.log(lat, lng);
console.log(nombreClave, anios);
