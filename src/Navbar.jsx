import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;