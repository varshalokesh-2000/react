 import React from "react";
 import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "child1" }, "I am a child H1 tag!"),
    React.createElement("h2", { key: "child2" }, "I am a child H2 tag!"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "child1" }, "I am a child H1 tag!"),
    React.createElement("h2", { key: "child2" }, "I am a child H2 tag!"),
  ]),
]);
console.log({ parent });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
