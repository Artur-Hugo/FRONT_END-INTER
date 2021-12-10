import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";

import Card from "../../components/Card";

import background from '../../assets/images/background-login.jpg'

import logoInter from '../../assets/images/Inter-orange.png'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const SignIn = () => {
    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px">
            <img src={logoInter} width={172} height={61} alt="logo inter"/>

            <InputContainer>
            <Input placeholder="EMAIL"/>
            <Input placeholder="SENHA" type="password"/>

            <ButtonContainer>
                <Button type="button">Entrar</Button>
                <p>Ainda não é cadastrado? <Link to="/signup">Cadastra-se Já</Link></p>
            </ButtonContainer>

            </InputContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;
