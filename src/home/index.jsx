import React, { useEffect, useState } from "react";
import { control, useForm } from "react-hook-form";
import Button from "../components/Button";
import { FormContainer, HomeContainer } from "./styles";
import ListRepo from "../components/ListaRepo";
import InputComponent from "../components/Input";
import Perfil from "../components/Perfil";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    perfil: yup.string().required("Campo obrigatório"),
    repositorio: yup.string().required("Campo obrigatório"),
  })
  .required()

const Home = () => {

    const { 
        control, 
        handleSubmit,
        formState: { errors, isValid },
     } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })
    const onSubmit = (data) => {

    };
  

    const [ url, setUrl ] = useState(null);

    const [ data, setData] = useState(null);
    
    useEffect(() => {
        fetch(url).then( response => response.json()).then( dados => setData(dados))
    }, [url]);

    console.log(data);

    return(
        <HomeContainer>
            <Perfil 
                imagemPerfil={''}
                nomePerfil={''}
                arrobaPerfil={''}
            />
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <InputComponent 
                    control={control}
                    nameInput="Perfil"
                    type="text"
                    name="perfil" 
                    placeholder="urbanykv"
                />

                <InputComponent 
                    control={control}
                    nameInput="Repositório"
                    type="text"
                    name="repositorio" 
                    placeholder="example-repo"
                />
                <Button />
            </FormContainer>
            <hr/>
            <ListRepo />
        </HomeContainer>
    );
}

export default Home;