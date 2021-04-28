import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrineraApp/>", () => {
  // test("deberia retornar hola soy goku", () => {
  //   const saludo = "Hola, soy Goku";
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  //});

  test("Debe de mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";

    const subtitulo = "Subitulo de prueba";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text(subtitulo);
    expect(textoParrafo).toBe(subtitulo);
  });
});
