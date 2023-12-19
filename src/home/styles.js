import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #010409;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    & hr{
        width: 35%;
        height: 1px;
        border: none;
        background-color: #ffffff11;
    }
`

export const FormContainer = styled.form`
    width: 320px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
