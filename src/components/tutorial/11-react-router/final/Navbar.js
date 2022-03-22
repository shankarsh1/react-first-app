import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/tutorial/tutorial'>Home</Link>
        </li>
        <li>
          <Link to='/tutorial/tutorial/about'>About</Link>
        </li>
        <li>
          <Link to='/tutorial/tutorial/people'>People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
