import React, { useContext } from "react";
import { LoginContext } from "../context/loginContext";

const Login = () => {
  const { setUsername, setShowProfile, setAge } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        placeholder="Username..."
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="You Age..."
        onChange={event => {
          setAge(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
