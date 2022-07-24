import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

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
        type="text"
        placeholder="Password..."
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <button onClick={() => setShowProfile(true)}>Login</button>

      {showProfile && <h1>{username}</h1>}
    </>
  );
};

export default Login;
