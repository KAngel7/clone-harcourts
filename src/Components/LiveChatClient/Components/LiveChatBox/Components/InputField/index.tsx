import * as React from 'react';
import './style.css';

class InputField extends React.Component<{}, {}> {
  render() {
    return (
      <div className="inputField">
        <input type="text" />
      </div>
    );
  }
}

export default InputField;