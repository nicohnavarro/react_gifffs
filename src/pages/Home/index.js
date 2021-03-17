import React, { useState } from 'react'
import {Link, useLocation} from 'wouter'
import TrendingSearches from '../../components/TrendingSearches'
import ListOfGifs from '../../components/ListOfGifs'

const POPULAR_GIFS = ['Argentina','Colombia','Chile','Peru']

export default function Home() {
  const [keyword, setkeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setkeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search a gif here"
          value={keyword}
        ></input>
      </form>
      <div className="App-main">
        <div className = "App-results">
          <h3 className="App_title">Tu buscador de Gifs</h3>
          <ListOfGifs gifs={gifs}/>
        </div>
        <div className="App-category">
          <TrendingSearches/>
        </div>
      </div>
    </>
  );
}

