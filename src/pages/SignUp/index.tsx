import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";

import Card from "../../components/Card";

import background from '../../assets/images/background-login.jpg'

import logoInter from '../../assets/images/Inter-orange.png'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate,Link } from "react-router-dom";
const SignIn = () => {

    const navigate = useNavigate()
    //quando logar vai ir aonde foi redirecionando

    const handleToSignUp = () =>{
        navigate('/dashboard');
    }

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px">
            <img src={logoInter} width={172} height={61} alt="logo inter"/>

            <InputContainer>
            <Input placeholder="NOME"/>
            <Input placeholder="SOBRENOME"/>
            <Input placeholder="EMAIL"/>
            <Input placeholder="SENHA" type="password"/>
            <Input placeholder="CONFIRMAR SENHA" type="password"/>

            <ButtonContainer>
                <Button type="button" onClick={handleToSignUp}>Entrar</Button>
                <p>Já tem uma conta? <Link to="/signin">Entre Já</Link></p>
            </ButtonContainer>

            </InputContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;
