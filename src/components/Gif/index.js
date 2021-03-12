import React from "react";
import './styles.css';
import {Link, useLocation} from 'wouter'

const Gif = ({ title, url, id}) => {
  const [path, pushLocation] = useLocation();
  
  const handleClick = (id)=>{
    pushLocation(`/gif/${id}`);
  }

  return (
    <div className='Gif' >
      <h4 className='gif_title'>{title}</h4>
      <img src={url} alt={url} onClick={handleClick(id)}/>
    </div>
  );
};

export default Gif;
