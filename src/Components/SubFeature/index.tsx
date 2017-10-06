import * as React from 'react';
import './style.css';

interface FeatureData {
  url: string;
  img: string;
  name: string;
  content: string;
  type: string;
}

class SubFeature extends React.Component<{}, {}> {
  data: FeatureData[] = [{
    url: '',
    img: 'http://cdn2.hubspot.net/hubfs/511279/CTA-Images/Harcourts-complete-hp-new.png',
    name: 'Harcourts Complete',
    content: 'Taking care of a wide range of services including arranging your connections,\
     disconnections, conveyancing, home loans and insurance.',
    type: 'Learn more'
  }, {
    url: '',
    img: 'http://cdn2.hubspot.net/hubfs/511279/CTA-Images/Harcourts-complete-hp-new.png',
    name: 'Harcourts Complete',
    content: 'Taking care of a wide range of services including arranging your connections,\
     disconnections, conveyancing, home loans and insurance.',
    type: 'View more'
  }, {
    url: '',
    img: 'http://cdn2.hubspot.net/hubfs/511279/CTA-Images/Harcourts-complete-hp-new.png',
    name: 'Harcourts Complete',
    content: 'Taking care of a wide range of services including arranging your connections,\
     disconnections, conveyancing, home loans and insurance.',
    type: 'View more'
  }, {
    url: '',
    img: 'http://cdn2.hubspot.net/hubfs/511279/CTA-Images/Harcourts-complete-hp-new.png',
    name: 'Harcourts Complete',
    content: 'Taking care of a wide range of services including arranging your connections,\
     disconnections, conveyancing, home loans and insurance.',
    type: 'View more'
  }, {
    url: '',
    img: 'http://cdn2.hubspot.net/hubfs/511279/CTA-Images/Harcourts-complete-hp-new.png',
    name: 'Harcourts Complete',
    content: 'Taking care of a wide range of services including arranging your connections,\
     disconnections, conveyancing, home loans and insurance.',
    type: 'View more'
  }, {
    url: '',
    img: 'http://cdn2.hubspot.net/hubfs/511279/CTA-Images/Harcourts-complete-hp-new.png',
    name: 'Harcourts Complete',
    content: 'Taking care of a wide range of services including arranging your connections,\
     disconnections, conveyancing, home loans and insurance.',
    type: 'View more'
  }, {
    url: '',
    img: 'http://cdn2.hubspot.net/hubfs/511279/CTA-Images/Harcourts-complete-hp-new.png',
    name: 'Harcourts Complete',
    content: 'Taking care of a wide range of services including arranging your connections,\
     disconnections, conveyancing, home loans and insurance.',
    type: 'View more'
  }, {
    url: '',
    img: 'http://cdn2.hubspot.net/hubfs/511279/CTA-Images/Harcourts-complete-hp-new.png',
    name: 'Harcourts Complete',
    content: 'Taking care of a wide range of services including arranging your connections,\
     disconnections, conveyancing, home loans and insurance.',
    type: 'View more'
  }];
  listFeature() {
    const listFeatureElements = this.data.map((data, index) => {
      return (
        <li key={index}>
          <span className="subDataWrapper">
            <a href={data.url}>
              <div className="subImgHeader">
                <img src={data.img} />
              </div>
            </a>
            <div className="subBoxContent">
              <a href={data.url}>
                <h2>{data.name}</h2>
              </a>
              <p>{data.content}</p>
            </div>
            <div>
              <br />
              <a href={data.url} className="moreButton">{data.type}</a>
            </div>
          </span>
        </li>
      );
    });
    return (
      <ul className="subBoxes">
        {listFeatureElements}
      </ul>
    );
  }
  render() {
    return (
      <div className="subFeature">
        {this.listFeature()}
      </div>
    );
  }
}

export default SubFeature;