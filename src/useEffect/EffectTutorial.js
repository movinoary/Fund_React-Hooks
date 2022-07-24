import axios from "axios";
import React, { useEffect, useState } from "react";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <>
      <div>Email : {data}</div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default EffectTutorial;
