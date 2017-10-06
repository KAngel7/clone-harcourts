import * as React from 'react';
import './style.css';
import SubFeature from '../../../../Components/SubFeature';

import MainFeature from '../../../../Components/MainFeature';

class Body extends React.Component<{}, {}> {
  render() {
    return (
      <div className="homeBody">
        <div className="mainFeatureWrapper">
          <MainFeature />
        </div>
        <div className="subFeatureWrapper">
          <SubFeature />
        </div>
      </div>
    );
  }
}

export default Body;