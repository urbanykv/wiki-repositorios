import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #010409;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
    padding: 60px 0;

    & hr{
        width: 35%;
        height: 1px;
        border: none;
        background-color: #ffffff11;
    }


`

export const FormContainer = styled.form`
    width: 320px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const RepoTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;


    & h1{
        font-size: 18px;    
        color: #fff;
    }

    & span{
        font-size: 16px;
        color: #ffffff50;
    }
`