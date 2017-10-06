import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

interface SelectCheckboxProps {

}

interface SelectCheckboxStates {
  isSelectAll: boolean;
  checkedArr: boolean[];
  isActive: boolean;
}

class SelectCheckbox extends React.Component<SelectCheckboxProps, SelectCheckboxStates> {
  options: { key: string, value: string }[] = [{
    key: 'House',
    value: 'House'
  }, {
    key: 'Villa',
    value: 'Villa'
  }, {
    key: 'Land',
    value: 'Land'
  }];
  constructor(props: any) { // err
    super(props);
    this.state = {
      isSelectAll: false,
      checkedArr: this.options.map((option) => {
        return false;
      }),
      isActive: false
    };
  }
  toggleCheckOption = (index: number) => {
    let currentArr = this.state.checkedArr;
    currentArr[index] = !currentArr[index];
    this.setState({
      checkedArr: currentArr
    });
  }
  toggleSelectAll = () => {
    this.setState({
      isSelectAll: !this.state.isSelectAll
    });
  }
  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  statusText = () => {
    return 'All property types';
  }
  closeDropdown = () => {
    this.setState({
      isActive: false
    });
  }
  componentDidMount() {
    document.addEventListener('click', this.closeDropdown);
  }
  render() {
    return (
      <div className="selectComp" onClick={this.toggleActive}>
        <span>{this.statusText()}</span>
        <Icon name="angle-down" />
        <ul className={'selectListChoice' + (this.state.isActive ? ' active' : '')}>
          <li>
            <input type="checkbox" checked={this.state.isSelectAll} onChange={e => { this.toggleSelectAll(); }} />
            <span>All</span>
          </li>
          {this.options.map((option, index) => {
            return (
              <li key={index} onClick={e => { e.stopPropagation(); this.toggleCheckOption(index); }}>
                <input type="checkbox" checked={this.state.checkedArr[index]} />
                <span>{option.key}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SelectCheckbox;