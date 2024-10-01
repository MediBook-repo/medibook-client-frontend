import {
    APIProvider,
    Map,
    Marker,
    InfoWindow,
} from '@vis.gl/react-google-maps';

import { useState } from 'react';

import 'boxicons';

const GoogleMap = () => {
    const [infowindowOpen, setInfowindowOpen] = useState(false); // Changed initial state to false
    const [selectedPosition, setSelectedPosition] = useState(null); // State to track the selected marker position
    const [isAddressCopied, setIsAddressCopied] = useState(false);

    const handleMarkerClick = (position) => {
        setSelectedPosition(position);
        setInfowindowOpen(true); // Open InfoWindow on marker click
    };

    const handleCloseInfoWindow = () => {
        setInfowindowOpen(false); // Close InfoWindow
        setSelectedPosition(null); // Reset selected position
    };

    const copyAddress = () => {
        const address = '204 Yap Quina Subdivision, Brgy. 1, Victoriás City, Negros Occidental';
        navigator.clipboard.writeText(address);
        setIsAddressCopied(true)
    }

    return (
        <>
            <APIProvider apiKey={'AIzaSyBsjaYpcqQsuXso2ZmNYIWvhm7Pnr9h-tU'}>
                <Map
                    style={{ width: '100%', height: '400px' }}
                    defaultCenter={{ lat: 10.902010, lng: 123.068431 }}
                    defaultZoom={19}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />

                <Marker
                    position={{ lat: 10.902010, lng: 123.068431 }}
                    clickable={true}
                    onClick={() => handleMarkerClick({ lat: 10.902010, lng: 123.068431 })}
                    title={'clickable google.maps.Marker'}
                />

                {infowindowOpen && selectedPosition && (
                    <InfoWindow
                        position={selectedPosition} // Set position of the InfoWindow
                        onCloseClick={handleCloseInfoWindow} // Handle InfoWindow close
                    >
                        <div className="flex flex-col sm:flex-row gap-2 items-start">
                            <div className="flex items-center gap-1">
                                <box-icon
                                    name="copy"
                                    className={`${isAddressCopied ? '' : 'cursor-pointer'}`}
                                    type={`${isAddressCopied ? 'solid' : ''}`}
                                    onClick={() => {
                                        copyAddress();
                                    }}
                                />
                                <p className={`block sm:hidden ${isAddressCopied ? '' : 'cursor-pointer'}`}
                                    onClick={() => {
                                        copyAddress();
                                    }}
                                >{isAddressCopied ? 'Address Copied' : 'Copy Address'}</p>
                            </div>
                            <p
                                className={`${isAddressCopied ? '' : 'cursor-pointer'}`}
                                onClick={() => {
                                    copyAddress();
                                }}
                            >
                                204 Yap Quina Subdivision, Brgy. 1, Victoriás City, Negros Occidental
                            </p>
                        </div>

                    </InfoWindow>
                )}
            </APIProvider>
        </>
    )
}

export default GoogleMap;