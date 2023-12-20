import React from "react";
import { PerfilContainer } from "./styles";

const Perfil = ({ nomePerfil, imagemPerfil, arrobaPerfil }) => {

    return(
        <PerfilContainer>
            <img src={imagemPerfil} alt={nomePerfil}/>
            <div>
                <span className="nome-perfil">{nomePerfil}</span>
                <span className="arroba-perfil">{arrobaPerfil}</span>
            </div>
        </PerfilContainer>
    );
}

export default Perfil;