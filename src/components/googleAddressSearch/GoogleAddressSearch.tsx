'use client';

import React from "react";
import { GooglePlacesContainer, StyledImageContainer } from "./GoogleAddressSearch.styled";
import Image from "next/image";
import dynamic from "next/dynamic";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
const GooglePlacesAutocomplete = dynamic(() => import("react-google-places-autocomplete"), { ssr: false });

interface Place {
    label: string;
    value: string;
}

interface GoogleAddressProps {
    selectedAddress: (place: Place) => void;
    setCoordinates: (coords: { lat: number, lng: number }) => void;
}

const GoogleAddressSearch: React.FC<GoogleAddressProps> = ({selectedAddress, setCoordinates}) => {
    return (
        <>
            <GooglePlacesContainer>
                <StyledImageContainer>
                    <Image src={"/propertypulse/location-pin.png"} alt={"location pin"} height={25} width={25}></Image>
                </StyledImageContainer>
                <GooglePlacesAutocomplete 
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
                    // selectProps={{
                    //     placeholder:'Search Property Address',
                    //     isClearable:true,
                    //     className: '',
                    //     onChange:(place)=>{
                    //         if (place) {
                    //         console.log(place);
                    //         selectedAddress(place);
                    //         geocodeByAddress(place.label)
                    //         .then(result=>getLatLng(result[0]))
                    //         .then(({lat,lng})=>{
                    //             setCoordinates({lat,lng})
                    //         })
                    //     } else {
                    //         console.log("No place selected")
                    //     }}
                    // }}
                />
            </GooglePlacesContainer>
        </>
    );
}

export default GoogleAddressSearch;
