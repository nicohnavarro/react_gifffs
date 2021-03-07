import React, { useState } from 'react'
import {Link, useLocation} from 'wouter'

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
        <input
          onChange={handleChange}
          type="text"
          placeholder="Ingrese una palabra"
          value={keyword}
        ></input>
      </form>
      <h3 className="App_title">Tu buscador de Gifs</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

