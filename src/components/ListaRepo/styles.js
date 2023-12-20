import styled from "styled-components";

export const ListRepoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 300px;
    height: 600px;
    padding: 25px 0;
    gap: 15px;
`

export const RepoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 300px;
    min-height: 120px;
    max-height: 120px;
    background-color: gray;
    border-radius: 10px;
    color: white;
    gap: 10px;
    padding: 0 25px;

    & a{
        color: white;
        text-decoration-line: none;
    }

    & span{
        color: #ffffff88;
        font-size: 13px;
        max-width: 250px;
        max-height: 50px;
    }
`