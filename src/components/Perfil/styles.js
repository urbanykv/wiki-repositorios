import styled from "styled-components";

export const PerfilContainer = styled.div`
    width: 320px;
    height: 250px;
    background-color: #00000085;
    border-radius: 15px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 17px;

    & img{
        width: 100px;
        border-radius: 50%;
    }

    & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2px;
    }

    & .nome-perfil{
        font-size: 18px;
        color: #fff;
    }

    & .arroba-perfil{
        font-size: 15px;
        color: #ffffff88;
    }
`