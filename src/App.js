import React from "react";
import "./App.css";
import ListGifs from "./components/ListGifs";
import { Route, Link } from "wouter";
const App = () => {

  return (
    <div className="App">
      <h2>APP</h2>
      <Link to='/gif/rick'>rick</Link>
      <Link to='/gif/mrrobot'>mrrobot</Link>
      <Link to='/gif/morty'>morty</Link>
      <section className="App-content">
        <Route path="/gif/:keyword" component={ListGifs} />
      </section>
    </div>
  );
};

export default App;
