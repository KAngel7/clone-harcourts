import * as React from 'react';
import './style.css';

class Footer extends React.Component<{}, {}> {
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

export default Footer;