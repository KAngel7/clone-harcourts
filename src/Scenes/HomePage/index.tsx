import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Body from './Components/Body';
import LiveChatClient from '../../Components/LiveChatClient';

class HomePage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="homePage">
        <div className="headerWrapper">
          <Header />
        </div>
        <div className="bodyWrapper container">
          <Body />
        </div>
        <div className="footerWrapper container">
          <Footer />
        </div>
        <div className="liveChatClientWrapper" style={{display: 'none'}}>
          <LiveChatClient />
        </div>
      </div>
    );
  }
}

export default HomePage;