import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";
import { LoginContext } from "./context/loginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider
        value={{ username, setUsername, setShowProfile, age, setAge }}
      >
        {showProfile ? <Profile /> : <Login />},
      </LoginContext.Provider>
    </div>
  );
}

export default App;
