import * as React from 'react';
import './style.css';

class Links extends React.Component<{}, {}> {
  body = () => {
    return (null);
  }
  render() {
    return (
      <ul className="links">
        <li>
          <h2>Search</h2>
          <ul>
            <li><a href="/">Residential Property for Sale</a></li>
            <li><a href="/">Rural Property for Sale</a></li>
            <li><a href="/">Rental Property</a></li>
            <li><h2>NAI Famicare</h2></li>
            <li><a href="/">Commercial Property for Sale</a></li>
            <li><a href="/">
              Commercial Property for Lease
                </a></li>
            <li><a href="/">Business</a></li>
          </ul>
        </li>
        <li>
          <h2>Resources</h2>
          <ul>
            <li><a href="/">Financial Services</a></li>
            <li><a href="/">
              Loan Calculator
                </a></li>
            <li><a href="/">Value your Property</a></li>
            <li><a href="/">Latest Famicare News</a></li>
          </ul>
        </li>
        <li>
          <h2>Famicare</h2>
          <ul>
            <li><a href="/">eBluebook</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Academy</a></li>
            <li><a href="/">Famicare Complete</a></li>
            <li><a href="/">Famicare Foundation</a></li>
            <li><a href="/">
              Franchise Opportunities
                </a></li>
            <li><a href="/">Meet the Team</a></li>
          </ul>
        </li>
        <li>
          <h2>Sections</h2>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">
              Property Management Services
                </a></li>
            <li><a href="/">Famicare Offices / People</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Blog</a></li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Links;