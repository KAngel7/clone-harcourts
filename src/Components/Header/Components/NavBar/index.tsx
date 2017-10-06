import * as React from 'react';
import './style.css';

interface NavStates {
  
}

interface NavProps {
  
}

class HeaderContent extends React.Component<NavStates, NavProps> {
  body() {
    return (
      <div className="container">
        <ul id="catnav">
          <li className="residential">
            <a href="#">Residential</a>
          </li>
          <li className="rentals">
            <a href="#">Rentals</a>
          </li>
          <li className="commercial">
            <a href="#">Commercial</a>
          </li>
          <li className="rural">
            <a href="#">Rural</a>
          </li>
          <li className="business">
            <a href="#">Business</a>
          </li>
        </ul>

      </div>
    );
  }
  render() {
    return (
      <div className="headerNav">
      {this.body()}
      </div>
    );
  }
}

export default HeaderContent;