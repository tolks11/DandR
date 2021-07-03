import React from 'react'
import Layout from '../components/layout'
import left from '../images/about/left.png'
import all_logos from '../images/about/all_logos.png'
import right from '../images/about/right.png'
import top_left from '../images/about/top_left.png'
import top_right from '../images/about/top_right.png'
import bottom_right from '../images/about/bottom_right.png'
import {StaticImage} from 'gatsby-plugin-image'



const About = () => {
    return (
        <div>
            <Layout>
            <div className="about-page">
                <div className="history-container">
                <h1 className="history">Our History</h1>
                    <p className="p-about">Started in 2004 as D&R Sportswear, D&R Promotions has evolved through hard work and a commitment to providing <span className="red-text">high quality service and products</span>.</p>
                    <p className="p-about">We've come a long way and have settled into our role in the community as a family owned LLC that offers <span className="red-text">custom embroided and screen printed apparel, along with a deep expertise and
                    wide array of print services</span> to fulfill your company needs.</p>
                    <StaticImage className="origins" src='../images/about/origins.png' height="10%" alt='OG logo' />
                <hr className="hr-about"/>
                </div>
                <div className="img-container">
                    <p className="img-portfolio-title">As you can see, we've constantly grown and expanded our capabilities and are now widely <span className="red-text">known throughout, and provide services to, the Greater Cincinnati area!</span> </p>
                    <div>
                        <img className="stiched-images" src={left} height="250px" width="300px" alt='OG logo' ></img>
                        <img className="stiched-images" src={right} height="250px" width="300px" alt='OG logo'></img>
                        <img className="stiched-images" src={top_left} height="250px" width="300px" alt='OG logo'></img>
                        <img className="stiched-images" src={top_right} height="250px" width="300px" alt='OG logo'></img>
                        <img className="stiched-images" src={bottom_right} height="250px" width="300px" alt='OG logo'></img>
                        <img className="stiched-images" src={all_logos} height="250px" width="300px" alt='OG logo'></img>
                </div>
                </div>

                <hr className="hr-about"/>
                <div className="outreach-container" >
                <h1 className="outreach">Community Outreach</h1>
                <p className="outreach-text">D&R is committed to more than providing excellent, on-time customer service.  We are also <span className="red-text">committed to, and invovled in, bettering the Greater Cincinnati
                    area</span> by giving back to the community.  D&R is proud to have contributed to the following charities in 2020: Disabled American Veterans, Ronald McDonald House,
                    FreeStore Foodbank, VFW, City Gospel Mission, Special Olympics, Bethany House, Payton's Lemonade Stand, St. Vincent DePaul, and Doctors Without Borders.
                </p>
                <hr className="hr-about-commun"/>
                </div>
            </div>
            </Layout>
        </div>
    )
}

export default About
