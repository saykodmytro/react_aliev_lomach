// const div = document.createElement("div");
// const root = document.getElementById("root");
// root.append(div);

import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";

// const paragraph = React.createElement("p", {
//   id: "test-p",
//   children: ["I am p"],
// });

// const div = React.createElement("div", {
//   name: "main",
//   id: "test-id",
//   className: "test-class",
//   // children: ["Hello", " React from D_S"],
//   children: [paragraph],
// });

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<Card />);

// *******
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
