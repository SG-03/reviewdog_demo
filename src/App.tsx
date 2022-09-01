import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name_arr = ["harry", "percy", "jace"];
  const [names, setNames] = useState(name_arr);
  return (
    <div className="App">
      {names.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
}

export default App;
