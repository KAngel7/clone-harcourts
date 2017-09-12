import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Header />
          <div className="bodyContainer">
            <Route exact={true} path="/" component={HomePage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
