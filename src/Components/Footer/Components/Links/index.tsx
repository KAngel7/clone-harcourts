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
            <li><a href="/Property/Residential">Residential Property for Sale</a></li>
            <li><a href="/Property/Rural">Rural Property for Sale</a></li>
            <li><a href="/Property/Rentals">Rental Property</a></li>
            <li><h2>NAI Harcourts</h2></li>
            <li><a href="http://www.naiharcourts.com.au/Property/Commercial">Commercial Property for Sale</a></li>
            <li><a href="http://www.naiharcourts.com.au/Property/Commercial?sale=false">
              Commercial Property for Lease
                </a></li>
            <li><a href="http://www.naiharcourts.com.au/Property/Businesses">Business</a></li>
          </ul>
        </li>
        <li>
          <h2>Resources</h2>
          <ul>
            <li><a href="http://www.mortgage-express.com.au/">Financial Services</a></li>
            <li><a href="http://www.mortgage-express.com.au/tools/home-loan-repayment-calculator/">
              Loan Calculator
                </a></li>
            <li><a href="http://content.harcourts.com.au/Content/Free-Market-Appraisal">Value your Property</a></li>
            <li><a href="http://content.harcourts.com.au/news">Latest Harcourts News</a></li>
          </ul>
        </li>
        <li>
          <h2>Harcourts</h2>
          <ul>
            <li><a href="http://ebooks.harcourts.net/?__hstc=2139531602532846#AustralianEditions">eBluebook</a></li>
            <li><a href="http://content.harcourts.com.au/careers">Careers</a></li>
            <li><a href="http://www.harcourts.net/academy/?__h276296">Academy</a></li>
            <li><a href="http://www.harcourtscomplete.com.au/">Harcourts Complete</a></li>
            <li><a href="http://www.harcourtsfoundation.org">Harcourts Foundation</a></li>
            <li><a href="http://content.harcourts.com.au/careers/franchise-opportunities">
              Franchise Opportunities
                </a></li>
            <li><a href="http://content.harcourts.com.au/content/australian-team">Meet the Team</a></li>
          </ul>
        </li>
        <li>
          <h2>Sections</h2>
          <ul>
            <li><a href="http://content.harcourts.com.au/Content/AboutUs">About Us</a></li>
            <li><a href="http://content.harcourts.com.au/Content/OurServices">Services</a></li>
            <li><a href="http://content.harcourts.com.au/Content/Property-Management">
              Property Management Services
                </a></li>
            <li><a href="/Offices">Harcourts Offices / People</a></li>
            <li><a href="http://content.harcourts.com.au/news">News</a></li>
            <li><a href="http://content.harcourts.com.au/blog">Blog</a></li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Links;