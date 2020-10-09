import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className='ui secondary  menu'>
        <li className='item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='item'>
          <Link to='/secondPage'>Second Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
