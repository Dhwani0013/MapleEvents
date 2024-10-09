// MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    height: '400px',
    width: '100%'
};

// Replace with your desired coordinates
const center = {
    lat: 43.5234, // Example: Latitude for Guelph, Ontario
    lng: -80.2265 // Example: Longitude for Guelph, Ontario
};

const MapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* Replace with your API key */}
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
            >
                <Marker position={center} /> {/* You can add more markers here */}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
