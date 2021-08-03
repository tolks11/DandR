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
              <p>Please provide any questions or comments you have, along with the quantities 
              and sizes needed regarding your order and we'll be happy to give you a free quote!</p>
              <p className="contact-p">You can also request <span className="red-text">free samples</span> of the item you're screen-printing or embroidering 
                <span className="red-text"> to make sure the fit is what you expect</span>!
              </p>
              <hr className="hr-contact"/>
              <div className="contact-details">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6184.8167839409425!2d-84.5963788211209!3d39.18816814280491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b5524fe77e57%3A0x8201b2efae33f0f8!2s5560A%20Cheviot%20Rd%2C%20Cincinnati%2C%20OH%2045247!5e0!3m2!1sen!2sus!4v1627916638645!5m2!1sen!2sus" 
              width="600" height="450" title="location" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          <div className="form-container">
            <form  name="contact"  method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label><span className="red-text">Your Name:</span> <input type="text" name="name" width="100" /></label>   
              </p>
                <label><span className="red-text">Your Email:</span> <input type="email" name="email" /></label>
                <label><span className="red-text">Your Job Description:</span> <textarea name="message"></textarea></label>
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