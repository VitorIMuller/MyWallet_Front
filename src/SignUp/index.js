import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Dados, StyledLink, Input, Button, AlignButton, Container } from './style'
import axios from "axios"
import logo from "../assets/MyWallet.png"


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPAssword] = useState('');
    const [name, setNome] = useState('');
    const navigate = useNavigate()

    function handleSignUp(e) {
        e.preventDefault();

        if (password === confirmPassword) {
            const user = {
                name: name,
                email: email,
                password: password
            }
            const promise = axios.post(" https://backapimywallet.herokuapp.com/signup", user)
            promise.then(() => {
                navigate("/")
            })
            promise.catch((error) => alert(error))
        } else {
            alert("Senhas não coincidem")
        }

    }


    return (
        <Container>
            <img src={logo} />
            <Dados>
                <form onSubmit={handleSignUp}>
                    <Input type='text' placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={name} />
                    <Input type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <Input type='password' placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <Input type='password' placeholder="Confirme a Senha" onChange={(e) => setConfirmPAssword(e.target.value)} value={confirmPassword} />
                    <AlignButton>

                        <Button type="submit">Cadastrar</Button>
                    </AlignButton>
                </form>
                <StyledLink to="/"> Já tem uma conta? Faça login!</StyledLink>

            </Dados>
        </Container>


    );
} export default SignUp