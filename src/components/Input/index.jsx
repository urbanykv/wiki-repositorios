import React from "react";
import { Input, InputContainer, TitleInput } from "./styles";
import { Controller } from "react-hook-form";

const InputComponent = ({ type, name, placeholder, nameInput, control }) => {
    return(
        <InputContainer>
            <TitleInput for={name}>{nameInput}</TitleInput>

            <Controller
                name={name}
                control={control}
                render={({ field }) => <Input {...field} type={type} id={name} name={name} placeholder={placeholder}/>}
            />
        </InputContainer>
    );
}

export default InputComponent;