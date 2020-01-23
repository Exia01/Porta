import React from 'react';
import classes from '../../../CSSModules/Navbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = props => {
  let combineClasses = [classes.navbarTag, 'container'].join(' ');
  return (
    <header className={classes['navbar-header-section']}>
      <nav className={combineClasses}>
        <div className={classes.headerSectionNameTitle}><h3> Jose Gonzalez</h3></div>
        <NavigationItems  classes={classes.ulTags}/>
      </nav>
    </header>
  );
};

export default Navbar;
