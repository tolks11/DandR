import React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'


const Clients = () => {
    return (
        <Layout>
            <div>
            <div className="clients-container">
            <h2 className="clients-header">Since 2004, D&R Promotions has been <span className="red-text">committed to</span>, and followed through on, <span className="red-text">outstanding customer service</span>!</h2> 
            <hr className="hr-clients"/> 
            <p className="clients-text">
                Our commitment to excellence has allowed us to work with <span className="red-text">virtually every business ranging from professional
                sports teams, to some of Cincinnati's most famous companies</span>, and everyone in between!  No company is too big or small, and we look forward to adding you to our growing clientele!
            </p>
            </div>
            <div className="gallery">
                <StaticImage
                className="image"
                src="../images/clients/reds.jpg"
                />
                <StaticImage
                className="image"
                src="../images/clients/towne.png"
                />
                <StaticImage
                className="image"
                src="../images/clients/SG.jpg"
                />
                <StaticImage
                className="image"
                src="../images/clients/downlite.jpg"
                />
                <StaticImage
                className="image"
                src="../images/clients/BM2.jpg"
                />
                <StaticImage
                className="image"
                src="../images/clients/Beischel.jpg"
                />
                <StaticImage
                className="image"
                src="../images/clients/AA.jpg"
                />
                <StaticImage
                className="image"
                src="../images/clients/air.png"
                />
                <StaticImage
                className="image"
                src="../images/clients/QCM.png"
                />
                <StaticImage
                className="image"
                src="../images/clients/Schibi.jpg"
                />
                <StaticImage
                className="image"
                src="../images/clients/Shoptech.jpg"
                />
                <StaticImage
                className="image"
                src="../images/clients/150th.jpg"
                />
            </div>
        </div>
        </Layout>
    )
}

export default Clients
