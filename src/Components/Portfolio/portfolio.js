import React from 'react';
import './portfolio.css'; 
import PortfolioImg from '../../Images/i2.jpg';

const Portfolio = () => {
    return (
        <div className='portfolio-mergecontainer'>
            <div className="portfolio-container">
                <div className="portfolio-text">
                    <h2>The Maple Events Showcase</h2>
                    <p>
                    Explore our gallery of beautifully planned events. See the magic we bring to every occasion.
                    </p>
                </div>
                <div className="portfolio-image">
                    <img src={PortfolioImg} alt="Portfolio" className="rounded-image" /> {/* Adjust the image source */}
                </div>
            </div>
            {/* Additional portfolio items can be added here */}
        </div>
    );
};

export default Portfolio;
