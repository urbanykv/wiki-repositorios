import React, { useEffect, useState } from "react";
import { control, useForm } from "react-hook-form";
import Button from "../components/Button";
import { FormContainer, HomeContainer, RepoTitle } from "./styles";
import ListRepo from "../components/ListaRepo";
import InputComponent from "../components/Input";
import Perfil from "../components/Perfil";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import perfilNull from "../assets/perfil-null.png";

const schema = yup
  .object({
    perfil: yup.string().required("Campo obrigatório")
  })
  .required()

const Home = () => {
    const githubToken = process.env.TOKEN_GITHUB;

    const { 
        control, 
        handleSubmit,
     } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })
    const onSubmit = dataForm => {
        setUrl(`https://api.github.com/users/${dataForm.perfil}`)

        setUrlRepo(`https://api.github.com/users/${dataForm.perfil}/repos`)
        
        setDadosForm(dataForm)
    };

    const [ url, setUrl ] = useState(null);

    const [ urlRepo, setUrlRepo ] = useState(null);

    const [ errorMessage, setErrorMessage ] = useState('');

    const [ dadosForm, setDadosForm] = useState(null);

    const [ data, setData] = useState(null);

    const [ dataRepo, setDataRepo] = useState(null);
    
    useEffect(() => {
        fetch(url, {
            headers: { "Authorization": githubToken }
        }).then( response => response.json()).then( dados => setData(dados))
        if(data?.name === undefined && dadosForm?.perfil.length > 0){
            setErrorMessage("Não Encontrado")
        }else{
            setErrorMessage('');
        }
    }, [url, data?.name, dadosForm?.perfil.length, githubToken]);

    useEffect(() => {
        fetch( urlRepo, {
            headers: { "Authorization": githubToken }
        }).then( response => response.json()).then( repositorios => setDataRepo(repositorios))
    }, [urlRepo, githubToken])

    return(
        <HomeContainer>
            <Perfil 
                imagemPerfil={data == null || data.message === "Not Found" ? perfilNull : data.avatar_url}
                nomePerfil={data == null || data.message === "Not Found" ? "" : data.name}
                arrobaPerfil={data == null || data.message === "Not Found" ? "Adicione o Perfil e ele aparecerá aqui" : data.login}
            />
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <InputComponent 
                    errorMessage={errorMessage}
                    control={ control }
                    nameInput="Perfil"
                    type="text"
                    name="perfil" 
                    placeholder="urbanykv"
                />
                <Button />
            </FormContainer>
            <hr/>
            <RepoTitle>
                <h1>Repositórios</h1>
                <span>{dataRepo?.length}</span>
            </RepoTitle>
            <ListRepo repositorios={dataRepo}/>
        </HomeContainer>
    );
}

export default Home;