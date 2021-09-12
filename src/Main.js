import React from "react";
import Product from "./Product.js";

function Main(props) {
  const { onAdd,filterData} = props;
  // console.log(filterData);

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {filterData.map(product => (
          <Product
            key={product}
            product={product}
            onAdd={onAdd}
            cartItems={props.cartItems}
          ></Product>
        ))}
      </div>
    </main>
  );
}

export default Main;
