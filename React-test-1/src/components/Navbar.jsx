import React from 'react'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Start</Link></li>
          <li><Link to="/about">Über Uns</Link></li>
          <li><Link to="/motive">Mehr</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;