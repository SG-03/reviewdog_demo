import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("hi");
  useEffect(() => {
    setMsg("hello");
  });
  return <div className="App">{msg}</div>;
}

export default App;
