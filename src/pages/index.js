import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby'

const IndexPage = ({data: {site}}) => {

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <div className="home-page">
        <div className="intro">
            <h1 className="grow">Grow your business.</h1>
            <p className="boost">Give your company or brand a boost with custom apparel!</p>
            <button className="home-btn"><Link to="/services">LEARN MORE &rarr; </Link> </button>
            <p className="market">Market yourself, establish your brand, and build a sense of community with apparel you'll love.</p>
        </div>
        </div>
      <hr className="hr-index" class="rounded"/>
      <div>
      <div className="grids">
        <h1 className="brands-trust"><span className="red-text">Apparel From Brands You Trust, Customized For You</span></h1>
          <div className="brand-gallery">
            <StaticImage
              className="image"
              src="../images/brands/nike.png"
              />
            <StaticImage
              className="image"
              src="../images/brands/TNF.png"
              />
          <StaticImage
              className="image"
              src="../images/brands/car.png"
              />
          <StaticImage
              className="image"
              src="../images/brands/EB.png"
              />
          <StaticImage
              className="image"
              src="../images/brands/Hanes.png"
              />
          <StaticImage
              className="image"
              src="../images/brands/UA.png"
              />
          <StaticImage
              className="image"
              src="../images/brands/gildan.png"
              />
          <StaticImage
              className="image"
              src="../images/brands/AA.png"
              />
          <StaticImage
              className="image"
              src="../images/brands/champ.png"
              />
          </div>
      </div>
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
