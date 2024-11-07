import styled from "styled-components";

interface ListItemProps {
    $isActive?: boolean;
}

export const StyledNavContainer = styled.div`
    position: fixed;
    top: 0;
    height: 12vh;
    width: 100%;
    background-color: rgb(232, 232, 236);
    display: flex; 
    justify-content: space-around;
`

export const StyledList = styled.ul`
    display: flex;
    align-items: center;
`

export const StyledListItem = styled.li<ListItemProps>`
    list-style-type: none;
    padding: 20px;
    color: ${({ $isActive }) => ($isActive ? 'rgb(195, 19, 166)' : '#1F2142')};
    font-size: 16px;
    font-weight: bold;
    
    &:hover {
        color: rgb(195, 19, 166);
    }
`

export const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StyledPostButton = styled.button`
    border-radius: 21.5px;
    padding: 10px 30px;
    margin-right: 10px;
    width: 100%;
    color: rgb(65, 65, 65);
    border: 1px solid rgb(200, 200, 200);
    background-color: rgb(232, 232, 236);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #fafafa;
    }
`

export const StyledLogButton = styled.button`
    background: linear-gradient(90deg, rgb(139, 73, 155) 0%, rgb(195, 19, 166) 39.44%);
    padding: 10px 30px;
    color: white;
    border-radius: 21.5px;
    width: 100%;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background: rgb(139, 73, 155);
    }
`