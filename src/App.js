import React from "react";
import "./App.css";
import MathProblem from "./components/math-problem";

function App() {
  return (
    <div className="App">
      <img
        src="https://web.sonoma.edu/logos/logos/preview-sec-blue-box.jpg"
        alt="SSU Logo"
      />
      <h1>Math Quiz!</h1>
      <h3>Built with React, hosted on an Raspberry Pi 10 miles away!</h3>
      <MathProblem />
    </div>
  );
}

export default App;
