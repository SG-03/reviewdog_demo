import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("hi");
  useEffect(() => {
    setMessage("hello");
  });
  return <div className="App">{message}</div>;
}

export default App;
