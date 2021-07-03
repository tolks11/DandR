import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import logo from '../images/icon.png'

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/"><img className="logo" alt="d and r logo" src={logo}/></Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>sales@dandrpromotions.com</p>
        <p>&copy; {new Date().getFullYear()} D&R Promotions, LLC</p>
        <p>5560A Cheviot Rd, Cincinnati</p>
      </footer>
      </div>
    
  )
}
