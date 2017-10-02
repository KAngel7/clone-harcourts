import * as React from 'react';
import './style.css';
import Links from './Components/Links';
import Infos from './Components/Infos';

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="footer">
        <div className="linksWrapper">
          <Links />
        </div>
        <div className="infosWrapper">
          <Infos />
        </div>
      </div>
    );
  }
}

export default Footer;