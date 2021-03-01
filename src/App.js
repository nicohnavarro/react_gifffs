import React, { useState, useEffect } from "react";
import "./App.css";
import Gif from "./components/Gif";
import { getGifs } from "./services/getGifs";

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.info("Actualizando los gifs");
    getGifs().then(gifs => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <h2>Nicolas</h2>
      <section className="App-content">
        {
        gifs.map(gif => <Gif key={gif.id} title={gif.title} id={gif.id} url={gif.url}/>)}
      </section>
    </div>
  );
};

export default App;
