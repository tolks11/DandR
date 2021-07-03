import React from "react"
import {Link} from "gatsby"


export default (props) => (
  <div>
  <nav className="navigation"> 
    <Link to="/clients">Trusted By</Link>
    <Link to="/services">Our Services</Link>
    <Link to="/about">About Us</Link>
    {/* <Link to="/https://catalog.companycasuals.com/">Catalog</Link> */}
    <Link to="/contact">Contact</Link>
  </nav>
  <p className="cincy">serving greater cincinnati since 2004!</p>
  </div>
  
)