import styled from "styled-components";

export const ListRepoContainer = styled.div`
    display: ${(props) => (props.display ? "flex" : "none")};
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 300px;
    height: 600px;
    padding: 25px 0;
    gap: 15px;
    overflow-y: scroll;
    box-shadow: 0px -5px 5px -5px #ffffff55 inset, 0px 5px 5px -5px #ffffff55 inset;
`

export const RepoContainer = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 280px;
    min-height: 120px;
    max-height: 120px;
    background-color: #80808025;
    backdrop-filter: blur(8px);
    border-radius: 10px;
    color: white;
    gap: 10px;
    padding: 0 25px;
    border: 1px solid #80808075;
    text-decoration-line: none;
    transition: 0.3s ease;

    &:hover{
        border: 1px solid #808080;
        background-color: #80808045;
    }

    & h2{
        font-size: 16px;
        color: white;
    }

    & span{
        color: #ffffff88;
        font-size: 13px;
        max-width: 250px;
        max-height: 50px;
    }
`