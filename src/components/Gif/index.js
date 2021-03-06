import React from "react";
import './styles.css';
const Gif = ({ title, url, id}) => {
  return (
    <div className='Gif'>
      <h4 className='gif_title'>{title}</h4>
      <img src={url} alt={url} />
    </div>
  );
};

export default Gif;
