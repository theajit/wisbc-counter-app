import React, { useState } from "react";

import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0)

  const increase = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "#FF5733" }}>Welcome to Women In STEM Boot Camp!!!</h1>
        <h1>WISBC Counter App</h1>
        <h2>{counter}</h2>
        <div className="buttons">
        <button
          style={{
            padding: "16px",
            border: "none",
            borderRadius: "4px 0 0 4px",
            cursor: "pointer",
            outline: "none",
            background:
              "linear-gradient(\n    90deg,\n    rgba(93, 12, 255, 1) 0%,\n    rgba(155, 0, 250, 1) 100%\n  )",
            color: "#fff",
            textTransform: "capitalize"
          }} onClick= {increase} >Increase</button>
        <button style={{
          padding: "16px 22px",
          border: "none",
          borderRadius: "0 4px 4px 0",
          cursor: "pointer",
          outline: "none",
          color: "#fff",
          textTransform: "capitalize",
          background:
            "linear-gradient(\n    90deg,\n    rgba(20, 159, 255, 1) 0%,\n    rgba(17, 122, 255, 1) 100%\n  )"
        }} onClick= {decrease}>Decrease</button>
        </div>
      </header>


    </div>
  )

}





export default App;

