import * as React from 'react';
import './style.css';

import SearchPropertiesForm from '../SearchPropertiesForm';
import SlideShow from './Components/SlideShow';
class MainFeature extends React.Component<{}, {}> {
  sliderData = [{
    imgUrl: 'http://photos.harcourts.com.au/V2/000/021/957/029-QCA2673-Sunshine-Coast-Caloundra.jpg',
    title: 'Pelican Waters',
    info: '$669,000'
  }, {
    imgUrl: 'http://photos.harcourts.com.au/V2/000/022/031/550-VRS3477-Melbourne-North-West-Melbourne.jpg',
    title: 'Keilor East',
    info: 'Auction 28 Oct 2017'
  }, {
    imgUrl: 'http://photos.harcourts.com.au/V2/000/022/031/537-QHD2764-Gold-Coast-Hinterland.jpg',
    title: 'Mount Nathan',
    info: 'Contact Agent'
  }, {
    imgUrl: 'http://photos.harcourts.com.au/V2/000/021/725/157-QIC170907-Brisbane-North.jpg',
    title: 'Highvale',
    info: 'Price by Negotiation'
  }];
  render() {
    return (
      <div className="mainFeature">
        <div className="slideShowWrapper">
          <SlideShow slide={this.sliderData} />
        </div>
        <div className="spWrapper">
          <SearchPropertiesForm />
        </div>
      </div>
    );
  }
}

export default MainFeature;