import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ClickCounterTwo from "./components/ClickCounterTwo";
import CounterTwo from "./components/CounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
// import User from "./components/User";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import Inline from "./components/Inline";
// import Stylesheet from "./components/Stylesheet";
// import NameList from "./components/NameList";
// import UserGreeting from "./components/UserGreeting";
// import MyGreet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import JSX from "./components/JSX Version";
// import NotJSX from "./components/Not JSX Version";
// import Message from "./components/message";
// import Count from "./components/counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import FragmentDemo from "./components/FragmentDemo";
// import Table from "./components/Table";
// import PureComp from "./components/PureComp";
// import ParentComp from "./components/ParentComp";
// import RefsDemo from "./components/RefsDemo";
// import FocusInput from "./components/FocusInput";
// import FRParentInput from "./components/FRParentInput";
// import PortalDemo from "./components/PortalDemo";
// import ErrorBoundary from "./components/ErrorBoundary";
// import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <CounterTwo>
        {(count, increamentCount) => (
          <ClickCounterTwo count={count} increamentCount={increamentCount} />
        )}
      </CounterTwo>

      <CounterTwo>
        {(count, increamentCount) => (
          <HoverCounterTwo count={count} increamentCount={increamentCount} />
        )}
      </CounterTwo>

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Imrul" : "Guest")} /> */}
      {/* <ClickCounter name="Imrul" />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <HoverCounterTwo/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp></PureComp> */}
      {/* <Table /> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifecycleA /> */}
      {/* <Form></Form> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline></Inline> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
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
