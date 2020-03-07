import React from "react";
import "./App.css";
import MathProblem from "./components/math";

function App() {
  return (
    <div className="App">
      <h1>Math Quiz!</h1>
      <h3>Built with React, hosted on an Raspberry Pi 10 miles away!</h3>
      <MathProblem />
    </div>
  );
}

export default App;
