import styled from "styled-components";

export const InputContainer = styled.div`
    width: 280px;
    height: 90px;
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
    padding: 7px 15px;
    font-size: 18px;

    &:focus{
        outline: none;
    }
`

export const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
`

export const TitleInput = styled.label`
    color: white;
    font-weight: 600;
    font-size: 20px;
`

export const Alerta = styled.span`
    color: red;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 5px 0 0;
`