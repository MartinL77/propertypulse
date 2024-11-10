'use client';

import React, { useState } from "react";
import { StyledListingHeading, StyledListingNextButton, StyledListingPageContainer, StyledListingSubHeading, StyledSearchContainer } from "./addNewListing.styled";
import GoogleAddressSearch from "@/components/googleAddressSearch/GoogleAddressSearch";
import { supabase } from "../../../../utils/supabase/client";
import { toast } from "sonner";
import Loader from "./Loader";
import { useRouter } from 'next/navigation'; 

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
    const [loader, setLoader] = useState(false);
    const router = useRouter();

    const nextHandler = async () => {
        const createdBy = 'supernoob727@gmail.com'

        setLoader(true);  

        const { data, error } = await supabase
            .from('listing')
            .insert([
                { 
                    address: selectedAddress?.label,
                    coordinates: { lat: coordinates?.lat, lng: coordinates?.lng },
                    createdBy: createdBy,
                }, 
            ]).select('*');
    
        console.log("Supabase response:", { data, error });
    
        setLoader(false);  
    
        if (data && !error && data.length > 0) {
            console.log("New data added:", data);
            toast("New Address added");
            router.replace('/edit-listing/' + data[0].id);
        } else if (error) {
            console.log("Error:", error.message);
            toast("Server side error");
        }
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
                        disabled={!selectedAddress || !coordinates || loader}
                        onClick={nextHandler}
                    >
                        {loader ? <Loader /> : 'Next'}</StyledListingNextButton>
                </StyledSearchContainer>
            </StyledListingPageContainer>
        </>
    );
}

export default AddNewListing;
