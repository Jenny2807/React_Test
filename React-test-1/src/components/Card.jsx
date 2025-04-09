import React from "react";

function Card({ title, image, description }) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Card;
  