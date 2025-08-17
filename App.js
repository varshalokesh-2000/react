import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX is not HTML in JS , JSX is HTML like syntax
//JSX => React.createElement => Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React-iuAEGFI</h1>;

//React Element
const headingElement = <h1 id="heading">Namaste React-headingElement</h1>;

//React Component
const Title = () => <h1 className="heading">Namaste React-title</h1>;
//Component composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 id="heading">Namaste React-inside Heading component</h1>
    </div>
  );
};
console.log({ HeadingComponent, headingElement });
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
