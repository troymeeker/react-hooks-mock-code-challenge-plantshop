import React, { useState } from "react";

function PlantCard({plant: { id, name, image, price}, onDeletePlant }) {
  const [inStock, setInStock] = useState(true)

  function handleStockToggle(){
    setInStock((inStock) => !inStock)
  }

  function handleDeletePlant(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method:"DELETE"
    }); 
    
    onDeletePlant(id)
  } 
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
      <button onClick={handleDeletePlant}>Delete</button>
    </li>
  );
}

export default PlantCard;
