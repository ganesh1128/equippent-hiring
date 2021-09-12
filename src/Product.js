import React from "react";

export default function Product(props) {
  const { product, onAdd, cartItems } = props;
  //console.log(product);
  //console.log(cartItems)
  return (
    <div>
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>Rent/day : Rs.{product.price}</div>
      <div>
        {/* <button onClick={() => onAdd(product)}  >Add To Cart</button> */}
        <button
          disabled={cartItems.some(obj => obj.id === product.id)}
          onClick={() => {
          onAdd(product);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
