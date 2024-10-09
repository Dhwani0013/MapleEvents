import React from 'react';
import './events.css'; 
import eventImg from '../../Images/i2.jpg';

const Events = () => {
    return (
        <div className='portfolio-mergecontainer'>
            <div className="portfolio-container">
                <div className="portfolio-text">
                    <h2>UPCOMING EVENTS</h2>
                    <p>
                    SEAMLESS EVENTS, TIMELESS MOMENTS
                    </p>
                </div>
                <div className="portfolio-image">
                    <img src={eventImg} alt="Portfolio" className="rounded-image" /> {/* Adjust the image source */}
                </div>
            </div>
            {/* Additional portfolio items can be added here */}
        </div>
    );
};

export default Events;
