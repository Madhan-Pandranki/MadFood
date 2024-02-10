// const heading = React.createElement("h1", {id : "heading"}, "Hello React from ReactJS");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "Im h1 tag in child div"),
        React.createElement("h2", {}, "Im h2 tag in child div")
    ]),
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "Im h1 tag in child div"),
        React.createElement("h2", {}, "Im h2 tag in child div")
    ])
])
console.log(parent) //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);    //replaces all elements in the tag of html