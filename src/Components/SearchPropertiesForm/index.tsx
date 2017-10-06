import * as React from 'react';
import './style.css';
enum Region {
  ALL = 'All regions',
  VN = 'VietNam',
  US = 'United State'
}

enum Properties {
  ALL = 'All property type',
  LAND = 'Land',
  HOUSE = 'House'
}

interface SearchPropertiesState {
  info: string;
  region: Region;
  property: Properties;
  minPrice: number | 'any';
  maxPrice: number | 'any';
  type: 'buy' | 'sell';
}

class SearchPropertiesForm extends React.Component<{}, SearchPropertiesState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      info: '',
      region: Region.ALL,
      property: Properties.ALL,
      minPrice: 'any',
      maxPrice: 'any',
      type: 'buy'
    };
  }
  render() {
    return (
      <form name="search" className="residential searchProperty" >
        <ul className="leftColSearch">
          <li className="searchHead">
            <label>Search Residential</label>
          </li>
          <li>
            <input type="text" name="search" className="helpInput" value={this.state.info} />
          </li>
          <li>
            <ul id="locations">
              <li className="region">
                <select>
                  <option value="500536">Yarralumla</option>
                </select>
              </li>
            </ul>
            <ul>
              <li>
                <select id="proptype" name="proptype">
                  <option value="15">Warehouse</option>
                </select>
              </li>
            </ul>
          </li>
          <li className="searchFilter priceDropDowns">
            <label >Price:</label><br/>
            <div className="priceWrapper">
            <select id="selectPriceMin" name="min">
              <option value="">Any</option>
            </select>
            <span>to</span>
            <select className="filterMax selectPriceMax" name="max">
              <option value="">Any</option>
            </select>
            </div>
          </li>
          <li  className="searchFilter soldPropertiesRadios">
            <label className="typeSale">
              <input defaultChecked={true} id="sold" name="sold" type="radio" value="false" />
              <span>For Sale</span>
            </label>
            <label className="typeRecent">
              <input id="sold" name="sold" type="radio" value="true" />
              <span>Recent Sales</span>
            </label>
          </li>
          <li className="searchButton">
            <input type="submit" title="Search" className="btn" value="Search" />
          </li>
        </ul>
      </form>
    );
  }
}

export default SearchPropertiesForm;