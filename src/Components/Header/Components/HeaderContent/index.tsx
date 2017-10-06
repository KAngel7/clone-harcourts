import * as React from 'react';
import './style.css';

class HeaderContent extends React.Component<{}, {}> {
  content() {
    return (
        <div className="container">
          <div id="header">
            <a id="logo" className="header-logo"  href="/">
              <div className="mainLogo"/>
            </a>
            <div className="header-links">
              <ul id="infoNav">
                <li><a href="/">Post property</a></li>
                <li><a href="/">Find property</a></li>
                <li><a href="/">Find agent</a></li>
                <li><a href="/">Advice</a></li>
                <li><a href="/">News</a></li>
              </ul>
            </div>
            <button className="toggle-sidebar" aria-label="Toggle Sidebar"/>
          </div>
        </div>
    );
  }
  render() {
    return (
      <div className="headerContent">
        {this.content()}
      </div>
    );
  }
}

export default HeaderContent;