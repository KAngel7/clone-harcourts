import * as React from 'react';
import './style.css';
export interface MessageData {
  type: 'text' | 'emoji' | 'image';
  owner: boolean;
  content: string;
  avatar?: string;
  senderName?: string;
}
interface MessageBubbleProps {
  data: MessageData;
}
class MessageBubble extends React.Component<MessageBubbleProps, {}> {
  render() {
    return (
      <div className="messageBubble">
        {}
      </div>
    );
  }
}

export default MessageBubble;