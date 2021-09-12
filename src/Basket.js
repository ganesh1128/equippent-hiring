import React from 'react'

function Basket(props) {
    const {cartItems,onAdd,onRemove} = props;
    //console.log(cartItems)
    const qty = cartItems.map((e) => e.qty )
    console.log(qty)
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty , 0);
     const taxPrice = itemsPrice * 0.14;
    const totalPrice = itemsPrice + taxPrice;
    return (
       <aside className="block col-1">
       <h2>Cart Items</h2>
       {/* <div>{cartItems.length === 0 && <div>Cart Is Empty</div> }</div> */}
       <div>{cartItems.length === 0 ? <div>Cart Is Empty</div> : null }</div>
       {cartItems.map((item) => (
           
           <div key={item.id} className="row5">
           <div className="col-2">{item.name}</div>
           <div className="inc-dec">
               <button onClick={() => onAdd(item)} className="add">+</button>
               <button onClick={() => onRemove(item)} className="remove">-</button>
           </div>
           <div className="col-2 text-right">
              <span>item cost = </span> {item.qty} * Rs.{item.price.toFixed(2)}
           </div>
           </div>
           
       ))}
       {cartItems.length !==0 && (
           <>
           <hr />
           <div className='row8'>
           <div className='col-2'>Total Items Price</div>
           <div className='col-1 text-right'>Rs.{itemsPrice.toFixed(2)}</div>
           </div>
           <div className='row8'>
           <div className='col-2'>Tax Price</div>
           <div className='col-1 text-right'>Rs.{taxPrice.toFixed(2)}</div>
           </div>
           <div className='row8'>
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

export default Basket
