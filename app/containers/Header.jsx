import React from 'react';
import { undoDraft } from '../redux/actions/index';

import '../styles/css/header.css';

const Header = (props) => {
  const { undoDraftOnClick } = props;
  return (
    <div className='header'>
      <span>
        Draft Tool (beta)
      </span>
      <span>
        <a className='header-undoButton' onClick={undoDraftOnClick}>
          Undo
        </a>
      </span>
    </div>
  )
}

export default Header;