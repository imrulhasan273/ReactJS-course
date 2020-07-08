import React from "react";

const NotJSX = () => {
  return React.createElement(
    "div",
    { id: "notJSXid", className: "notJSXclass" },
    React.createElement("h1", null, "NOT JSX Version")
  );
};

export default NotJSX;
