import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        {/* <title>Contact — {site.siteMetadata.title}</title> */}
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
        <div className="contact-text">
          <h2>Get in touch and <span className="red-text">stand out</span> from the competition!</h2>
        </div>
        <div className="contact-page">
        <div className="two-grids -contact">
          <div className="contact-info-text">
              <p>Please provide any questions or comments you have, along with the quantity 
              and sizes regarding your order and we'll be happy to give you a free quote!</p>
              <p className="contact-p">You can also request <span className="red-text">free samples</span> of the item you're screen-printing or embroidering 
                <span className="red-text"> to make sure the fit is what you expect</span>!
              </p>
              <hr className="hr-contact"/>
              <div className="contact-details">
                <span className="red-text">
                <p>5560A Cheviot Rd</p>
                <p>Cincinnati, OH, 45247</p>
                <p>sales@dandrpromotions.com</p>
                <p>513-598-1881</p>
                </span>
              </div>
            </div>
          <div className="form-container">
            <form  name="contact"  method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>Your Name: <input type="text" name="name" /></label>   
              </p>
                <label>Your Email: <input type="email" name="email" /></label>
                <label>Your Job Description: <textarea name="message"></textarea></label>
                <button onClick={() => console.log('thank you!')}  className="submit-btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`