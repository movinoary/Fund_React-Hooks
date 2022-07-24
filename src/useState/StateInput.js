import React, { useState } from "react";

const StateInput = () => {
  const [inputValue, setInputValue] = useState("vino");

  let onChange = event => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateInput;
