import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact='true'>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to='/u1/places' exact='true'>
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink to='/places/new' exact='true'>
          New Places
        </NavLink>
      </li>
      <li>
        <NavLink to='/auth' exact='true'>
          Authenticate
        </NavLink>
      </li>
    </ul>
  )
}

export default NavLinks;
