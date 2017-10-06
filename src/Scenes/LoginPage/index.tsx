import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import LoginForm from './Components/LoginForm';

class HomePage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="homePage">
        <div className="headerWrapper">
          <Header />
        </div>
        <div className="bodyWrapper container">
          <LoginForm />
        </div>
        <div className="footerWrapper container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;