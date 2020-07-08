import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyGreet from "./components/Greet";
import Welcome from "./components/Welcome";
import JSX from "./components/JSX Version";
import NotJSX from "./components/Not JSX Version";

function App() {
  return (
    <div className="App">
      <MyGreet></MyGreet>
      <Welcome></Welcome>
      <JSX></JSX>
      <NotJSX></NotJSX>
    </div>
  );
}

export default App;
