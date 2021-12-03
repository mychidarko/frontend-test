import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    h2 {
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 0;
    }

    p {
        max-width: 80%;
    }

    a {
        text-decoration: underline;
    }
`;