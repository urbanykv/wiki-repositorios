import React from "react";
import { ListRepoContainer, RepoContainer } from "./styles";

const ListRepo = ({ repositorios }) => {

    const verificarRepositorios = repositorios && repositorios.length > 0;


    console.log(repositorios);
    return(
        <ListRepoContainer display={verificarRepositorios}>

            {Array.isArray(repositorios) ? (
                repositorios.map(repositorio => {
                    return(
                        <RepoContainer target="_blank" href={`https://github.com/${repositorio.full_name}`}>
                            <h2>{repositorio.name}</h2>
                            <span>{repositorio.description}</span>
                        </RepoContainer>
                    );
                })
            ) : ( null )}
        </ListRepoContainer>
    );
}

export default ListRepo;