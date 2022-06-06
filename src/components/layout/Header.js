import React from "react"
import { Link } from 'wouter';
import './Header.css';

function Header() {
  return (
      <header id="header" className="row py-3 bg-white border-bottom">
        <div className="col-md-2 offset-md-5 text-center">
          <Link to="/">
            <img id="logo" className="img-fluid" alt="GroZero logo" src="/logo.png"/>
          </Link>
        </div> 
      </header>
  );
}

export default Header;