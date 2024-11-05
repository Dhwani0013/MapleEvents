// import React from 'react';
// import './events.css'; 
// import eventImg from '../../Images/i2.jpg';

// const Events = () => {
//     return (
//         <div className='portfolio-mergecontainer'>
//             <div className="portfolio-container">
//                 <div className="portfolio-text">
//                     <h2>UPCOMING EVENTS</h2>
//                     <p>
//                     SEAMLESS EVENTS, TIMELESS MOMENTS
//                     </p>
//                 </div>
//                 <div className="portfolio-image">
//                     <img src={eventImg} alt="Portfolio" className="rounded-image" /> {/* Adjust the image source */}
//                 </div>
//             </div>
//             {/* Additional portfolio items can be added here */}
//         </div>
//     );
// };

// export default Events;
import React, { useState } from 'react';
import Modal from 'react-modal';
import image1 from '../../Images/i2.jpg';
import './events.css';

// Sample image data
const imageData = [
  { id: 1, src: image1, alt: 'Image 1' },
  { id: 2, src: image1, alt: 'Image 2' },
  { id: 3, src: image1, alt: 'Image 3' },
  // Add more images as needed
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Open the modal with the selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {imageData.map((image) => (
        <div key={image.id} className="thumbnail" onClick={() => openModal(image)}>
          <img src={image.src} alt={image.alt} />
          <div className="zoom-icon">🔍</div>
        </div>
      ))}

      {selectedImage && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <button onClick={closeModal} className="close-button">X</button>
          <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
        </Modal>
      )}
    </div>
  );
};

export default ImageGallery;
