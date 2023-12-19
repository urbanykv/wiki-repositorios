import React from "react";
import { PerfilContainer } from "./styles";

const Perfil = ({ nomePerfil, imagemPerfil, arrobaPerfil }) => {
    return(
        <PerfilContainer>
            <img src={imagemPerfil} alt={nomePerfil}/>
            <span>{nomePerfil} - {arrobaPerfil}</span>
        </PerfilContainer>
    );
}

export default Perfil;