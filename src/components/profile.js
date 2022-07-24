import React, { useContext } from "react";
import { LoginContext } from "../context/loginContext";

const Profile = () => {
  const { username, age } = useContext(LoginContext);

  return (
    <>
      <h1>Profile</h1>
      <h2>Username : {username}</h2>
      <h2>Age : {age}</h2>
    </>
  );
};

export default Profile;
