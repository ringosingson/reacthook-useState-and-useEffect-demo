import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [name, setName] = useState("World");

  useEffect(() => {
    document.title = `Hello, ${name}`;
  });

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName("Ringo")}>
        Click me to change the name
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
