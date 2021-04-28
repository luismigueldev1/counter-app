import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp>", () => {
  const value = 10;
  let wrapper = shallow(<CounterApp value={value} />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={value} />);
  });

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defect en 10", () => {
    const valueTest = 100;
    const wrapper = shallow(<CounterApp value={valueTest} />);

    const valorPorDefecto = Number(wrapper.find("p").text(value).trim());
    expect(valorPorDefecto).toBe(valueTest);
  });

  test("debe de incrementar el contador con el boton de +1 ", () => {
    wrapper.find("button").at(0).simulate("click");

    const counterText = Number(wrapper.find("p").text().trim());

    expect(counterText).toBe(value + 1);
  });

  test("debe de decrementar el contador con el boton de -1 ", () => {
    wrapper.find("button").at(1).simulate("click");
    const counterText = Number(wrapper.find("p").text().trim());
    expect(counterText).toBe(value - 1);
  });

  test("debe de resetear el valor por defecto con el boton reset ", () => {
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    const counterText = Number(wrapper.find("p").text().trim());
    expect(counterText).toBe(value);
  });
});
