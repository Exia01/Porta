import React, { Component } from 'react';
import classes from '../../CSSModules/Layout.module.css'; //module css
import Navbar from '../../components/Navigation/NavBar/Navbar';
import MainContent from '../../containers/MainContent';

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
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
