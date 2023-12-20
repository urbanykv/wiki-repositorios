import React from "react";
import { Input, InputContainer, RowContainer, TitleInput } from "./styles";
import { Controller } from "react-hook-form";
import { Alerta } from "./styles";

const InputComponent = ({ type, name, placeholder, nameInput, control, errorMessage }) => {
    return(
        <InputContainer>
            <RowContainer>
                <TitleInput for={name}>{nameInput}</TitleInput>
                <Alerta>{errorMessage}</Alerta>
            </RowContainer>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <Input {...field} type={type} id={name} name={name} placeholder={placeholder}/>}
            />
            
        </InputContainer>
    );
}

export default InputComponent;