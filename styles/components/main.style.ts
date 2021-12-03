import styled from "styled-components";
import theme from "../theme";

export const Main = styled.main`
    ${theme.breakpoints.md} {
        padding: 10px 8%;
    }

    ${theme.breakpoints.lg} {
        padding: 10px 12%;
    }

    ${theme.breakpoints.xl} {
        padding: 10px 16%;
    }

    ${theme.breakpoints.xxl} {
        padding: 10px 20%;
    }
`;