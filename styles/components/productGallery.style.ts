import styled from "styled-components";
import theme from "../theme";

export const Container = styled.div`
    margin-top: 30px;
    padding: 20px;

    ${theme.breakpoints.md} {
        padding: 0;
    }

    .filters {
        display: flex;

        > * {
            width: 100%;

            &:first-child {
                select {
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                }
            }

            &:nth-child(2) {
                select {
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    border-left: none;
                }
            }

            select {
                width: 100%;
                padding: 10px;
                padding-right: 20px;
                background: #eee;
                border-color: #ddd;
                border-radius: 5px;
                outline: none;
            }
        }
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: space-between;
    }
`;

export const ProductContainer = styled.div`
    width: calc(50% - 5px);
    margin-bottom: 20px;

    ${theme.breakpoints.xs} {
        margin-top: 25px;
    }

    ${theme.breakpoints.md} {
        width: calc(33% - 5px);
        margin-top: 30px;
    }
    
    .container {
        justify-content: center;
        display flex;
        border: 1px solid #eee;
        border-radius: 5px;

        &:hover {
            background: #eee;
        }
    }

    h5, p {
        font-size: 14px;
        margin: 0;
    }

    h5 {
        margin-top: 15px;
    }

    p {
        color: #666;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .actions {
        display: flex;
        flex-direction: column;

        > *:first-child {
            margin-bottom: 10px;
        }

        ${theme.breakpoints.md} {
            flex-direction: row;

            > *:first-child {
                margin-bottom: 0;
            }
        }
    }
`;

export const ProductImage = styled.img`
    border-radius: 5px;
    width: 90%;
`;

export const Button = styled.button`
    background: white;
    border: 1px solid #eee;
    color: #333;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: #eee;
    }

    &:first-child {
        margin-right: 10px;
    }
`;
