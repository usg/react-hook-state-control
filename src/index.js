import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Bulbs() {
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(1);

  const lightSwitch = () => setOn((on) => !on);
  const addBulbs = () => setCount((count) => count + 1);

  const bulb = <div className={on ? "bulb-on" : "bulb-off"} />;
  const bulbs = Array(count).fill(bulb);

  return (
    <>
      <div className="bulbs">{bulbs}</div>
      <button onClick={lightSwitch}>On/off</button>
      <button onClick={addBulbs}>Add bulb</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Bulbs />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
