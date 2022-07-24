import React, { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // console.log(inputRef.current.value);
    // inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Vino</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default RefTutorial;
