import * as React from 'react';
import './style.css';

class Footer extends React.Component<{}, {}> {
  body = () => {
    return (null);
  }
  render() {
    return (
      <p className="copyrightInfo">
        © 2017 Famicare Group Ltd, Inc. All rights reserved.
        <a href="/content/privacypolicy" target="_blank">Privacy Policy</a>
        <span>|</span>
        <a href="/popup/disclaimer" target="_blank">Disclaimer</a><br />
        This website is best viewed with IE 7 or above; Firefox; Safari or Chrome
      </p>
    );
  }
}

export default Footer;