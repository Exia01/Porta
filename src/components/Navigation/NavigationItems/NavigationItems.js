import React from 'react';
import { NavLink } from 'react-router-dom';

//passing boolean props layout
const NavigationItems = props => {
  return (
    <ul className={props.classes}>
      <li>
        <a href='http://LinkedIn.com' target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
      </li>
      <li>
        <a href='http://LinkedIn.com' target='_blank' rel='noopener noreferrer'>
          Resume
        </a>
      </li>
      <li>
        <a href='http://LinkedIn.com' target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </li>
      <li>
        <a href='http://LinkedIn.com' target='_blank' rel='noopener noreferrer'>
          Projects
        </a>
      </li>
    </ul>
  );
};
export default NavigationItems;

/*  <NavLink link='/Resume' exact>
        Resume
      </NavLink>
      <NavLink link="">Projects</NavLink> */
