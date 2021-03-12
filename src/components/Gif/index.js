import React from "react";
import "./styles.css";
import { Link } from "wouter";

const Gif = ({ title, url, id }) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4 className="gif_title">{title}</h4>
        <img loading="lazy" src={url} alt={url} />
      </Link>
    </div>
  );
};

export default Gif;
