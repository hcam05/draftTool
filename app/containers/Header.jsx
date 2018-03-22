import React from 'react';
import { undoDraft } from '../redux/actions/index';

import { Link, NavLink } from 'react-router-dom';

import '../styles/css/header.css';

const Header = (props) => {
  const { undoDraftOnClick } = props;
  return (
    <div className='header'>
      <span>
        Draft Tool (beta)
      </span>

      <span>
      </span>

      <span>
        <NavLink className='header-undoButton' to='/board'>Draft Board</NavLink>
        <NavLink className='header-undoButton' to='/setup'>Setup</NavLink>
        <a className='header-undoButton' onClick={undoDraftOnClick}>
          Undo
        </a>
      </span>
    </div>
  )
}

export default Header;