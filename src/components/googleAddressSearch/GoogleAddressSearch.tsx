'use client';

import React, { useEffect } from "react";
import { GooglePlacesContainer, StyledImageContainer } from "./GoogleAddressSearch.styled";
import Image from "next/image";
import dynamic from "next/dynamic";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { apiKey } from "../../../config";
const GooglePlacesAutocomplete = dynamic(() => import("react-google-places-autocomplete"), { ssr: false });

interface Place {
    label: string;
    value: string;
}

interface GoogleAddressProps {
    selectedAddress: (place: Place) => void;
    setCoordinates: (coords: { lat: number, lng: number }) => void;
}

const GoogleAddressSearch: React.FC<GoogleAddressProps> = ({ selectedAddress, setCoordinates }) => {
    const loadGoogleMapsScript = () => {
        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}&libraries=places`;
            script.async = true;
            script.onload = () => console.log('Google Maps script loaded');
            document.head.appendChild(script);
        }
    };

    useEffect(() => {
        loadGoogleMapsScript();
    }, []);

    return (
        <GooglePlacesContainer>
            <StyledImageContainer>
                <Image src={"/propertypulse/location-pin.png"} alt={"location pin"} height={25} width={25} />
            </StyledImageContainer>
            <GooglePlacesAutocomplete 
                apiKey={process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY : apiKey}
                selectProps={{
                    placeholder: 'Search Property Address',
                    isClearable: true,
                    className: '',
                    onChange: (place) => {
                        if (place) {
                            console.log(place);
                            selectedAddress(place);
                            geocodeByAddress(place.label)
                                .then(result => getLatLng(result[0]))
                                .then(({ lat, lng }) => {
                                    setCoordinates({ lat, lng });
                                });
                        } else {
                            console.log("No place selected");
                        }
                    }
                }}
            />
        </GooglePlacesContainer>
    );
}

export default GoogleAddressSearch;