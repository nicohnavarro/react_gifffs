import React, { useState } from "react";
import "./App.css";
import ListGifs from "./components/ListGifs";

const App = () => {
  const [keyword, setKeyword] = useState("panda");

  const handleClick = () => {
    setKeyword("mrRobot");
  };

  return (
    <div className="App">
      <h2>Nicolas</h2>
      <h3>{keyword}</h3>
      <button onClick={handleClick}>change keyword</button>
      <section className="App-content">
        <ListGifs keyword={keyword} />
      </section>
    </div>
  );
};

export default App;
