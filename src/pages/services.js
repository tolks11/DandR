import React from 'react'
import Layout from '../components/layout'
import embroid from '../images/embroid.jpg'
import screen from '../images/screen.jpg'
import printing from '../images/printing.jpg'

const Services = () => {
    return (
        <Layout>
                <div className="services-container">
                    <h1 className="services-header">Custom Apparel For Any Occasion!</h1>
                    <p className="experience">D&R has 15+ years of experience and high-quality service <span className="red-text">fufilling every potential custom apparel need! </span>
                        Company polos and fleeces, screen-printed apparel for any event or sport-outing, construction vests and outerwear, 
                        custom embroidered hats of any kind, backpacks and travel bags, embroidered towels and blankets, shorts, pants and more.
                        We've done it all and <span className="red-text">look forward to adding you to our ever-expanding clientele!</span></p> 
                </div>
                
            <div className="card-container">
            <div className="card">
                <img className="card-image" src={embroid} height={350} width={500} alt="embroidery"></img>
                <div className="card-container">
                    <h4><span className="red-text">Embroider Anything</span></h4>
                    <p className="card-text">Display your company logo on everything ranging from classic polos and 
                        jackets to backpacks, golf bags, cooolers, towels, blankets, hats of any kind and more.
                    </p>
                </div>
            </div>
            <div className="card">
                <img className="card-image" src={screen} height={350} width={500} alt="embroidery"></img>
                <div className="card-container">
                    <h4><span className="red-text">Custom Screenprint Apparel</span></h4>
                    <p className="card-text">Screenprint your logo for any event, hoodies, shorts, landscaping, construction
                        vests, totebags, and more; we do it all and do it right! 
                    </p>
                </div>
            </div>
            <div className="card">
                <img className="card-image" src={printing} height={350} width={500} alt="embroidery"></img>
                <div className="card-container">
                    <h4><span className="red-text">Printing Services</span></h4>
                    <p className="card-text">Our printing expertise comes from 30+ years in the business!  Digital, offset, 
                    point-of-purchase displays, and more. Let us help you market yourself with your next print job! 
                    </p>
                </div>
            </div>
            <div className="beyond-container">
            <h2 className="beyond-header">Above & Beyond </h2>
                <p>We've always strived for excellent customer service including free samples to make sure the item is the correct fit, and free delivery 
                        once your job is completed!  Reach out and let us know what we can do to better serve you.
                </p>
            </div>
            </div>
    </Layout>
    )
}

export default Services
