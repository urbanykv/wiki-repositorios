import styled from "styled-components";

export const InputContainer = styled.div`
    width: 280px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 5px;
`

export const Input = styled.input`
    background-color: #ffffff11;
    border: none;
    border-bottom: 1px solid #fff;
    width: 280px;
    height: 35px;
    color: #fff;
    padding: 0 15px;
    font-size: 18px;

    &:focus{
        outline: none;
    }
`

export const TitleInput = styled.label`
    color: white;
    font-weight: 600;
    font-size: 20px;
`