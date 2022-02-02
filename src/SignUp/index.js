import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Dados, StyledLink, Input, Button, AlignButton, Container } from './style'
import axios from "axios"
import logo from "../assets/MyWallet.png"


function SignUp() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [name, setNome] = useState('')

    function handleSignUp(e) {
        e.preventDefault();


    }


    return (
        <Container>
            <img src={logo} />
            <Dados>
                <form onSubmit={handleSignUp}>
                    <Input type='text' placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={name} />
                    <Input type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <Input type='password' placeholder="Senha" onChange={(e) => setSenha(e.target.value)} value={senha} />
                    <Input type='password' placeholder="Confirme a Senha" />
                    <AlignButton>

                        <Button type="submit">Cadastrar</Button>
                    </AlignButton>
                </form>
                <StyledLink to="/"> Já tem uma conta? Faça login!</StyledLink>

            </Dados>
        </Container>


    );
} export default SignUp