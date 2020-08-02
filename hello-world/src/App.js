import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyGreet from "./components/Greet";
import Welcome from "./components/Welcome";
import JSX from "./components/JSX Version";
import NotJSX from "./components/Not JSX Version";
import Message from "./components/message";
import Count from "./components/counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
      {/* <EventBind></EventBind> */}
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Count></Count> */}
      {/* <Message></Message> */}

      {/* <MyGreet name="Imrul" heroName="Superman">
        <p>This is children props</p>
      </MyGreet> */}
      {/* <MyGreet name="Towhid" heroName="Batman">
        <button>Action</button>
      </MyGreet> */}

      {/* <MyGreet name="Hasan" heroName="Spiderman"></MyGreet> */}

      {/* <Welcome name="Imrul" heroName="Superman">
        <p>Childrens</p>
      </Welcome> */}
      {/* <Welcome name="Towhid" heroName="Batman">
        <button>Action</button>
      </Welcome> */}
      {/* <Welcome name="Hasan" heroName="Spiderman"></Welcome> */}
      {/* <JSX></JSX> */}
      {/* <NotJSX></NotJSX> */}
    </div>
  );
}

export default App;
