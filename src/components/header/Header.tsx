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
                        <Image src={"/property-pulse-logo.png"} alt={"logo"} width={250} height={80} style={{marginRight: '40px'}} />
                        <Link href={'/'} style={{textDecoration: 'none'}}><StyledListItem $isActive={path === '/'}>For Sale</StyledListItem></Link> {/* User clicks on purchase property and is prompted by settlement form */}
                        <Link href={'/myportfolio'} style={{textDecoration: 'none'}}><StyledListItem $isActive={path === '/myportfolio'}>My Portfolio</StyledListItem></Link> {/* include pending settlements and settled properties */}
                    </StyledList>
                <StyledButtonContainer>
                    <StyledPostButton>Post</StyledPostButton>
                    <StyledLogButton>Log In</StyledLogButton>
                </StyledButtonContainer>
            </StyledNavContainer>
        </>
    );
}

export default Header;