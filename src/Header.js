import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
    const {getSearchTerm,filterData} = props;
    return (
       <header className="center">
           <div>
               <a href="#/">
               <h1 className="center">Equippment Hiring</h1>
               </a>
           </div>
           <div className="search"> 
               <input type="text" placeholder="Search.."  onChange={getSearchTerm} filterData={filterData} />
               {/* <button type="submit" onClick={getSearchTerm}  ><i class="fa fa-search"></i></button>  */}

           </div>
           <div>
               <Link to="/cart"><i class="fas fa-shopping-cart"></i> 
               
               Cart {' '}

               {props.countCartItems ? (
                   
                   <button className="badge">{props.countCartItems}</button>
               ):
            (' ') }
               </Link>{' '}
        <Link to="/About"><span>About</span></Link>
           </div>
          
       </header>
    )
}

export default Header
