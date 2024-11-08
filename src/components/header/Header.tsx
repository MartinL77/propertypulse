'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { StyledButtonContainer, StyledList, StyledListItem, StyledLogButton, StyledNavContainer, StyledPostButton } from "./Header.styled";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
    const path = usePathname();

    useEffect(() =>{
        console.log(path);
    }, [path]);

    return (
        <>
            <StyledNavContainer>
                    <StyledList>
                        <Image src={"/propertypulse/property-pulse-logo.png"} alt={"logo"} width={250} height={80} style={{marginRight: '40px'}} />
                        <Link href={'/'} style={{textDecoration: 'none'}}><StyledListItem $isActive={path === '/'}>For Sale</StyledListItem></Link> {/* User clicks on purchase property and is prompted by settlement form */}
                        <Link href={'/my-portfolio'} style={{textDecoration: 'none'}}><StyledListItem $isActive={path === '/my-portfolio/'}>My Portfolio</StyledListItem></Link> {/* include pending settlements and settled properties */}
                        <Link href={'/saved-properties'} style={{textDecoration: 'none'}}><StyledListItem $isActive={path === '/saved-properties/'}>Saved Properties</StyledListItem></Link>
                    </StyledList>
                <StyledButtonContainer>
                    <Link href={"/add-new-listing"} >
                        <StyledPostButton>Post</StyledPostButton>
                    </Link>
                    <StyledLogButton>Log In</StyledLogButton>
                </StyledButtonContainer>
            </StyledNavContainer>
        </>
    );
}

export default Header;