import styled from "styled-components";
import theme from "../theme";

export const BannerImg = styled.img`
    width: 100%;
    height: 35vh;

    ${theme.breakpoints.sm} {
        height: 45vh;
    }

    ${theme.breakpoints.md} {
        border-radius: ${theme.radius.lg};
    }
`;
