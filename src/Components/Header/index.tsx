import * as React from 'react';
import './style.css';

interface HeaderProps {

}

interface HeaderState {

}
class Header extends React.Component<HeaderProps, HeaderState> {
  body = () => {
    return (null);
  }
  render() {
    return (
      <div className="header">
        {this.body()}
      </div>
    );
  }
}

export default Header;