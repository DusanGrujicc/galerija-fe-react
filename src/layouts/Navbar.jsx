import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar = ({ children }) => (
  <div>
    <header>
      <h1>Gallery</h1>
      <nav>
        <ul>
          
          
          <li>
          <NavLink to="/allgalleries" className="listItem"activeClassName="activeItem">AllGalleries</NavLink>
          </li>
          <li>
          <NavLink to="/login"className="listItem"activeClassName="activeItem">Login</NavLink>
         </li>
          <li>
          <NavLink to="/register"className="listItem" activeClassName="activeItem">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    {children}
    
  </div>

);


export default Navbar;