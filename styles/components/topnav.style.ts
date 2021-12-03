import styled from "styled-components";
import theme from "../theme";

export const Nav = styled.nav`
    display: flex;
    padding: 10px;
    justify-content: space-between;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SearchBox = styled.input`
    border: none;
    margin-left: 10px;
    outline: none;

    ${theme.breakpoints.xs} {
        display: none;
    }
`;

export const CartLabel = styled.h5`
    margin: 0;
    margin-right: 10px;

    @media only screen and (max-width: 575px) {
        display: none;
    }
`;