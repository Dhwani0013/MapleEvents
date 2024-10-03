// MainImage.js
import React from 'react';
import './eventImg.scss'; 
import backgroundImg from '../../Images/sample.jpg';

const EventImg = () => {
    return (
        <div>
            <img
                src={backgroundImg}
                alt="Background Image"
                className="main-image"
            />
        </div>
    );
};

export default EventImg;
