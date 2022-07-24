import "./App.css";
import StateInput from "./useState/StateInput";
import StateTutorial from "./useState/StateTutorial";

function App() {
  return (
    <div className="App">
      <div>
        <StateTutorial />
      </div>
      <div>
        <StateInput />
      </div>
    </div>
  );
}

export default App;
