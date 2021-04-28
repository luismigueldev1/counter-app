import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value = 0 }) {
  const [counter, setCounter] = useState(value);

  const handleAddCounter = () => {
    setCounter(counter + 1);
    //setCounter((prevState) => prevState + 1);
  };

  const handleSubCounter = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>
      <button onClick={handleAddCounter}>+1</button>
      <button onClick={handleSubCounter}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
