import * as React from 'react';
import './style.css';

interface UserBarStates {

}

interface UserBarProps {

}

class UserBar extends React.Component<UserBarStates, UserBarProps> {
  body() {
    return (
        <div className="container">
          <div id="topNav">
            <div className="siteSwitcher">
              <ul className="sitedropBox">
                <li>
                  <div className="countryCurrent countryAU">
                    <a href="#" className="siteSelectDrop">Famicare Australia</a>
                  </div>
                </li>
              </ul>

            </div>
            <ul id="myAccountNav">
              <li className="user">Welcome, <span>Guest</span></li>
              <li id="shortlistTotal"><a href="/shortlist">My Shortlist</a>
                <span style={{ display: 'none' }}>(<strong />)</span></li>
              <li><a href="/register">Register</a></li><li><a href="/login">Login</a></li>
            </ul>
          </div>
        </div>
    );
  }
  render() {
    return (
      <div className="userBar">
        {this.body()}
      </div>
    );
  }
}

export default UserBar;