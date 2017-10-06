import * as React from 'react';
import './style.css';

import UserBar from './Components/UserBar';
import HeaderContent from './Components/HeaderContent';
import NavBar from './Components/NavBar';

interface HeaderProps {

}

interface HeaderStates {

}

class Header extends React.Component<HeaderProps, HeaderStates> {

  render() {
    return (
      <div className="header">
        <div className="userBarWrapper">
          <UserBar />
        </div>
        <div className="headerContentWrapper">
          <HeaderContent />
        </div>
        <div className="navBarWrapper">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Header;