import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Header(props) {
  const { getSearchTerm, filterData } = props;
  return (
    <header className="center">
      <div>
        <a href="#/">
          <h1 className="center">Equippment Hiring</h1>
        </a>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search.."
          onChange={getSearchTerm}
          filterData={filterData}
        />
      </div>
      <div className="head1">
        <Link to="/" className="head">
          <i class="fas fa-shopping-cart"></i>
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            " "
          )}
        </Link>{" "}
        <Link to="/About" className="head">
          <span>About</span>
        </Link>
        <Link to="/" className="head">
          <span>Dashboard</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
