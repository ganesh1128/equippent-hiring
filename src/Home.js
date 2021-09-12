import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
// import data from "./data";
import "./App.css";
// import Cart from "./Cart";
 import axios from "axios";

function Home() {
  const [products,setProducts]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const[filterDatas,setFilterDatas] =useState([]);
  useEffect(() => {
    fetchProductList();
  }, []);
  let fetchProductList = async () => {
    try {
      let productsData = await axios.get(
        "https://equippment-hiring.herokuapp.com/all-products"
      );
      //console.log(productsData.data);
      setProducts([...productsData.data]);
    } catch (error) {
      console.log(error);
    }
  };

  //  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  
  
  const onAdd = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1,  }]);
    }
  };
  // console.log(cartItems);
 
 
  const onRemove = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const getSearchTerm = e => {
    setSearchTerm(e.target.value);
    //console.log(e.target.value);
  };
  const filterData = products.filter(searchData => {
    return searchData.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
//console.log(filterData);

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} getSearchTerm ={getSearchTerm } filterData={filterData}> </Header>
      <div className="grid">
        <Main onAdd={onAdd}  cartItems={cartItems} filterData={filterData}/>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        {/* <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} /> */}
        
        
      </div>
    </div>
  );
}
   


export default Home
