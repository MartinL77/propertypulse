'use client';

import React, { useState } from "react";
import { StyledListingHeading, StyledListingNextButton, StyledListingPageContainer, StyledListingSubHeading, StyledSearchContainer } from "./addNewListing.styled";
import GoogleAddressSearch from "@/components/googleAddressSearch/GoogleAddressSearch";

interface Place {
  label: string;
  value: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

const AddNewListing: React.FC = () => {
    const [selectedAddress, setSelectedAddress] = useState<Place | undefined>(undefined); 
    const [coordinates, setCoordinates] = useState<Coordinates | undefined>(undefined);

    const nextHandler = () => {
        console.log(selectedAddress, coordinates)
    }

    return (
        <>
            <StyledListingPageContainer>
                <StyledListingHeading>Add New Listing</StyledListingHeading>
                <StyledSearchContainer>
                    <StyledListingSubHeading>Enter Address which you want to list</StyledListingSubHeading>
                    <GoogleAddressSearch 
                        setCoordinates={(value) => setCoordinates(value)} 
                        selectedAddress={(value) => setSelectedAddress(value)}
                    />
                    <StyledListingNextButton 
                        disabled={!selectedAddress || !coordinates}
                        onClick={nextHandler}
                    >Next</StyledListingNextButton>
                </StyledSearchContainer>
            </StyledListingPageContainer>
        </>
    );
}

export default AddNewListing;
