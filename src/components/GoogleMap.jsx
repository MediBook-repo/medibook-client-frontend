import {
    APIProvider,
    Map,
    Marker,
    InfoWindow,
} from '@vis.gl/react-google-maps';

import { ToastContainer, toast } from 'react-toastify';

import { useEffect, useState } from 'react';

import useAxios from '../hooks/useAxios';

import 'boxicons';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

const GoogleMap = () => {
    const addressCoordinates = { lat: 10.902139, lng: 123.068377 };
    const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const { data, loading, error } = useAxios(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${addressCoordinates.lat},${addressCoordinates.lng}&key=${GOOGLE_MAPS_API_KEY}`); // Replace with your API URL
    const address = !loading && 'Brgy. ' + data.data.results[0].formatted_address

    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [isAddressCopied, setIsAddressCopied] = useState(false);

    const handleMarkerClick = (position) => {
        setSelectedPosition(position);
        setInfowindowOpen(true);
    };

    const handleCloseInfoWindow = () => {
        setInfowindowOpen(false);
        setSelectedPosition(null);
    };

    const notify = () => toast.info("Address copied successfully!");

    const copyAddress = () => {
        if (!isAddressCopied) {
            navigator.clipboard.writeText(address);
            setIsAddressCopied(true);
            notify();
        }
    };

    return (
        <>
            <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                <Map
                    style={{ width: '100%', height: '400px' }}
                    defaultCenter={addressCoordinates}
                    defaultZoom={16.8}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />

                <Marker
                    position={addressCoordinates}
                    clickable={true}
                    onClick={() => handleMarkerClick(addressCoordinates)}
                    title={'clickable google.maps.Marker'}
                />

                {infowindowOpen && selectedPosition && (
                    <InfoWindow
                        position={selectedPosition}
                        onCloseClick={handleCloseInfoWindow}
                    >
                        <div className="flex flex-col sm:flex-row gap-2 items-start overflow-hidden">
                            <div className={`flex items-center gap-1 ${isAddressCopied ? '' : 'cursor-pointer'}`}>
                                <box-icon
                                    name="copy"
                                    className={`${isAddressCopied ? '' : 'cursor-pointer'}`}
                                    type={`${isAddressCopied ? 'solid' : ''}`}
                                    onClick={() => copyAddress()}
                                />
                                <p className={`block sm:hidden ${isAddressCopied ? '' : 'cursor-pointer'}`}
                                    onClick={() => copyAddress()}
                                >
                                    {isAddressCopied ? 'Address Copied' : 'Copy Address'}
                                </p>
                            </div>
                            <p
                                className={`${isAddressCopied ? '' : 'cursor-pointer'}`}
                                onClick={() => copyAddress()}
                            >
                                {address}
                            </p>
                        </div>
                    </InfoWindow>
                )}
            </APIProvider>

            {/* Customized Toast Container */}
            <ToastContainer
                position="top-right"   // Adjust position of the toast
                autoClose={2000}       // Auto close after 2 seconds
                closeButton={false}    // Remove the close button
                hideProgressBar={true} // Hide the progress bar
                theme="colored"

            />
        </>
    );
};

export default GoogleMap;
