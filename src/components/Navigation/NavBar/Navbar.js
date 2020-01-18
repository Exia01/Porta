import React from 'react';
import classes from '../../../static/styles/Navbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = props => {
  let combineClasses = [classes.navbarTag, 'container'].join(' ');
  return (
    <header className={classes['navbar-header-section']}>
      <nav className={combineClasses}>
        <div className={classes.headerSectionNameTitle}><h2> Jose Gonzalez</h2></div>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Navbar;
