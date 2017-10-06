import * as React from 'react';
import './style.css';
import MessageBubble, { MessageData } from './Components/MessageBubble';
import InputField from './Components/InputField';
export interface MessageData extends MessageData {}
interface LiveChatBoxState {
  messages: MessageData[];
  isTyping: boolean;
  isAdminActive: boolean;
}

class LiveChatBox extends React.Component<{}, LiveChatBoxState> {
  constructor() {
    super();
    this.state = {
      messages: [],
      isTyping: true,
      isAdminActive: true
    };
  }
  messageList() {
    return this.state.messages.map((messData, index) => {
      return (
        <div key={index} className="messWrapper">
          <MessageBubble data={messData} />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="liveChatBox">
        <div className="lcHeader">
          <span className="adminStatus" />
          <span className="adminName">Admin</span>
          <span className="closeButton" />
        </div>
        <div>
          <div className="lcBody">
            {this.messageList()}
          </div>
          <div className="lcFooter">
            <InputField />
          </div>
        </div>
      </div>
    );
  }
}

export default LiveChatBox;