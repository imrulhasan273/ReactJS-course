import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import CounterThree from "./components/CounterThree";
// import CounterTwo from "./components/CounterTwo";
// import Toolbar from "./components/Toolbar";
// import CounterOne from "./components/CounterOne";
// import ComponentC from "./components/ComponentC";
// import DataFetching from "./components/DataFetching";
// import IntervalHookCounter from "./components/IntervalHookCounter";
// import IntervalClassCounter from "./components/IntervalClassCounter";
// import MouseContainer from "./components/MouseContainer";
// import HookMouse from "./components/HookMouse";
// import ClassMouse from "./components/ClassMouse";
// import HookCounterOne from "./components/HookCounterOne";
// import ClassCounterOne from "./components/ClassCounterOne";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookCounter from "./components/HookCounter";
// import PostForm from "./components/PostForm";
// import PostList from "./components/PostList";

//-----
// # step 1
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
//-----

///------
// const themes = {
//   light: {
//     foreground: "#ffffff",
//     background: "#000000",
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#555555",
//   },
// };
// export const ThemeContext = React.createContext(themes.light);
//-----

function App() {
  return (
    <div className="App">
      <CounterThree />
      {/* <CounterTwo /> */}
      {/* <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={"Imrul"}>
        <ChannelContext.Provider value={"Backstreet Boys"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
