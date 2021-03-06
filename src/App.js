import React from "react";
import "./App.css";
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'

import { Route, Link } from "wouter";
const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <h2>APP</h2>
        <Link to="/">
          <img
            className="App-logo"
            src="./images/logo.png"
            alt="Gifffs Logo"
          ></img>
        </Link>
        <Route
          path='/'
          component={Home}
        />
        <Route
          path='/search/:keyword'
          component={SearchResults}
        />
        <Route 
          path="/gif/:id" 
          component={Detail} 
        />
      </section>
    </div>
  );
};

export default App;
