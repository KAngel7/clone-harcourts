import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../Scenes/HomePage';
import LoginPage from '../../Scenes/LoginPage';
import RegisterPage from '../../Scenes/RegisterPage';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/login" component={LoginPage} />
          <Route exact={true} path="/register" component={RegisterPage} />
        </div>
      </Router>
    );
  }
}

export default App;
