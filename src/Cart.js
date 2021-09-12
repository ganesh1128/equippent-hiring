import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Cart() {
   

    const [products,setProducts]=useState([]);

    useEffect(() => {
        fetchProductList();
      }, []);
      let fetchProductList = async () => {
        try {
          let productsData = await axios.get(
            "https://equippment-hiring.herokuapp.com/all-products"
          );
          console.log(productsData.data);
          setProducts([...productsData.data]);
        } catch (error) {
          console.log(error);
        }
      };
      console.log(products);
      
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
      
      console.log(cartItems);
     
     
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

    // const {onAdd,onRemove} = props;
    
    // const qty = cartItems.map((e) => e.qty )
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty , 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice >= 2000 ? 0 : 50 ;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
       <aside className="block col-1">
       <h2>cart items</h2>
       <div>{cartItems.length === 0 ? <div>Cart Is Empty</div> : null }</div>
       {cartItems.map((item) => (
           <div key={item.id} className="row5">
           <div className="col-2">{item.name}</div>
           <div className="inc-dec">
               <button onClick={() => onAdd(item)} className="add">+</button>
               <button onClick={() => onRemove(item)} className="remove">-</button>
           </div>
           <div className="col-2 text-right">
               {item.qty} * Rs.{item.price.toFixed(2)}
           </div>
           </div>
       ))}
       {cartItems.length !==0 && (
           <>
           <hr />
           <div className='row5'>
           <div className='col-2'>Items Price</div>
           <div className='col-1 text-right'>Rs.{itemsPrice.toFixed(2)}</div>
           </div>
           <div className='row5'>
           <div className='col-2'>Tax Price</div>
           <div className='col-1 text-right'>Rs.{taxPrice.toFixed(2)}</div>
           </div>
           <div className='row5'>
           <div className='col-2'>Shipping Price</div>
           <div className='col-1 text-right'>Rs.{shippingPrice.toFixed(2)}</div>
           </div>
           <div className='row5'>
           <div className='col-2'><strong>Total Price</strong></div>
           <div className='col-1 text-right'>Rs.{totalPrice.toFixed(2)}</div>
           </div>
           <hr/>
           <div >
               <button onClick={() => alert("chek out")}>check out</button>

           </div>
           </>
          


       )}



       </aside>
    )
}

export default Cart