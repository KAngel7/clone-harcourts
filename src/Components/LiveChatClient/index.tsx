import * as React from 'react';
import './style.css';
import LiveChatBox from './Components/LiveChatBox';

class LiveChatClient extends React.Component<{}, {}> {
  render() {
    return (
      <div className="liveChatClient">
        <LiveChatBox />
      </div>
    );
  }
}

export default LiveChatClient;