import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

interface SelectProps {
  
}

interface SelectStates {
  listBed: [{key: string, value: string}];
  listChoiceDisplay: boolean;
  defaultValue: any;
}

class SelectComp extends React.Component<SelectProps, SelectStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      listBed: [{
        key: 'Min Beds',
        value: 'Any'
      },
      {
        key: 'Studio',
        value: 'Studio'
      },
      {
        key: '1 Bed',
        value: '1 Bed'
      },
      {
        key: '2 Beds',
        value: '2 Beds'
      },
      {
        key: '3 Beds',
        value: '3 Beds'
      },
      {
        key: '4 Beds',
        value: '4 Beds'
      }
    ],
      listChoiceDisplay: false,
      defaultValue: null
    };
  }
  clickChoice = () => {
    this.setState({
      listChoiceDisplay: !this.state.listChoiceDisplay
    });
  }
  doSelected = (index: number) => {
    this.setState({
      defaultValue: this.state.listBed[index].key
    });
  }
  componentWillMount() { 
    this.setState({
      defaultValue: this.state.listBed[0].key
    });
  }
  render() {
    return (
      <div className="selectComp" onClick={this.clickChoice}>
        <span>{this.state.defaultValue}</span>
        <Icon name="angle-down" />
        <ul className="selectListChoice" style={{display: `${this.state.listChoiceDisplay ? 'block' : 'none'}`}}>
          {this.state.listBed.map((item: any, index: any) => {
            return (
              <li key={index} onClick={e => {this.doSelected(index); }}>
                {item.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SelectComp;