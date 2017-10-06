import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import SelectComp from './SelectComp';
import SelectCheckbox from './SelectCheckbox';

interface HeaderContentProps {
  
}

interface HeaderContentState {

}

class Content extends React.Component<HeaderContentProps, HeaderContentState> {
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="headerContent">
        <div className="headerContainer">
          <div className="containerTop">
            <h2 className="ctnTopLeft">Search properties for sale</h2>
            <div className="ctnTopRight">
              <span className="iconNew">NEW</span>
              <a href="#!">We are now the place for home loans</a>
              <span><Icon name="angle-right" /></span>
            </div>
          </div>
          <div className="containerBody">
            <form action="" className="searchForm">
              <div className="searchBody">
                <SelectComp />
                <SelectCheckbox />
              </div>
              <div className="searchBottom">
                <h2>Bottom</h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;