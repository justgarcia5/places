import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact='true'>
          All Users
        </NavLink>
      </li>
      <li>
        {auth.isLoggedIn &&
          <NavLink to='/u1/places' exact='true'>
            My Places
          </NavLink>
        }
      </li>
      <li>
        {auth.isLoggedIn &&
          <NavLink to='/places/new' exact='true'>
            New Places
          </NavLink>
        }
      </li>
      <li>
        {!auth.isLoggedIn ?
          <NavLink to='/auth' exact='true'>
            Authenticate
          </NavLink>
        :
          <button to='/auth' onClick={() => auth.logout()} exact='true'>
            Logout
          </button>
        }
      </li>
    </ul>
  )
}

export default NavLinks;
