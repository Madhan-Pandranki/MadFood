import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {id : "heading"}, "Hello React from ReactJS");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child1"}, [
//         React.createElement("h1", {}, "Im h1 tag in child div"),
//         React.createElement("h2", {}, "Im h2 tag in child div")
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1", {}, "Im h1 tag in child div"),
//         React.createElement("h2", {}, "Im h2 tag in child div")
//     ])
// ])
// console.log(parent) //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);    //replaces all elements in the tag of html

//* JSX developed by Facebook (different from react) -> HTML like syntax
//TODO: transpiled before it reaches the JS -> PARCEL -> Babel(transpiler)
//! JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const ele = <span>React element</span>;
//React Element
const jsxheading = (
  <h1 id="jsxheading" className="head">
    {ele} {/* Element in an element*/}
    Namaste react using JSX 💕
  </h1>
);

//? React Components
//// Class based components -> old
// Functional components -> new
const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React Title Component
    </h1>
  );
};

const number = 1000;

const HeadingComponent = () => (
  <div id="container">
    <Title /> {/*Component in a component*/}
    <Title></Title>
    {Title()}
    {jsxheading} {/*Element in a component*/}
    <h2>{number}</h2> {/* Using JS inside JSX */}
    <h1>Namaste React From Heading Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
