import React from "react";

const Gif = ({ title, url, id}) => {
  return (
    <div className='Gif'>
      <h4>{title}</h4>
      <img src={url} alt={url} />
    </div>
  );
};

export default Gif;
