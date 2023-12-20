import React from "react";
import { ListRepoContainer, RepoContainer } from "./styles";

const ListRepo = ({ repositorios }) => {

    console.log(repositorios);
    return(
        <ListRepoContainer>
            {repositorios?.map( repositorio => {
                return(
                    <RepoContainer>
                        <a href={`https://github.com/${repositorio.full_name}`}>{repositorio.name}</a>
                        <span>{repositorio.description}</span>
                    </RepoContainer>
                );
            })}
        </ListRepoContainer>
    );
}

export default ListRepo;