// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import CSS (optional, you can create a CSS file)
import App from './App';  // Import the main App component

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally, include reportWebVitals if needed for performance measurement
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);
