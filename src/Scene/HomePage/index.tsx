import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';

class HomePage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="homePage">
        {}
      </div>
    );
  }
}

export default HomePage;