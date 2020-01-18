import React, { Component } from 'react';
import classes from '../../static/styles/Layout.module.css'; //module css
import Navbar from '../../components/Navigation/NavBar/Navbar';

class Layout extends Component {
  state = {
    toggleSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    //since using set state we need to use prev state
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default Layout;
