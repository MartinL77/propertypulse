import styled from "styled-components";

export const StyledListingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledListingHeading = styled.div`
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: rgb(31, 33, 66);
    font-weight: bold;
    margin-top: 50px;
`

export const StyledSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 40px 100px;
    box-shadow: 
    0px 1px 2px rgba(0, 0, 0, 0.2),
    0px 2px 4px rgba(0, 0, 0, 0.2),
    0px 4px 8px rgba(0, 0, 0, 0.2),
    0px 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 21.5px;
`

export const StyledListingSubHeading = styled.div`
    display: flex;
    justify-content: center;
    color: rgb(31, 33, 66);
    margin-bottom: 20px;
`

export const StyledListingNextButton = styled.button`
    width: 300px;
    background: rgb(31, 33, 66);
    padding: 10px 30px;
    color: white;
    border-radius: 21.5px;
    margin-top: 20px;
    border: 0;
    font-weight: bold;
    cursor: pointer;
`