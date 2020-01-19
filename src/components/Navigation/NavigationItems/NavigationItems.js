import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../../CSSModules/NaviagationItems.module.css';
//passing boolean props layout
const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <li>
        <a href='http://LinkedIn.com' target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
      </li>
      <li>Resume</li>
      <li>Projects</li>
    </ul>
  );
};
export default NavigationItems;

/*  <NavLink link='/Resume' exact>
        Resume
      </NavLink>
      <NavLink link="">Projects</NavLink> */
