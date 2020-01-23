import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import classes from '../../CSSModules/Footer.module.css';


let combineClasses = [classes.footerGridSection, 'container'].join(' ');

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={combineClasses}>
        <a href='http://' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon='envelope'  />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon='file-alt'  />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']}  />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']}  />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
