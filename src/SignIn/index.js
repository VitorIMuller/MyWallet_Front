
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/MyWallet.png"
import { Dados, StyledLink, Button, Input, AlignButton, Container } from './style'
import axios from "axios"
import UserContext from "../Context/UserContext"


function SignIn() {
    const { setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();

        const user = {
            'email': email,
            'password': senha
        }

        const promise = axios.post('http://localhost:5000/signin', user);
        promise.then(response => {
            setUser(response.data);
            navigate('/home')
        }
        );
        promise.catch(() => {
            alert('Usuário e/ou Senha Inválidos');
            setEmail("");
            setSenha("");
        }
        );
    }

    return (
        <Container>
            <img src={logo} />
            <Dados>
                <form onSubmit={handleSignUp}>
                    <Input
                        type='email'
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required />
                    <Input
                        type='password'
                        placeholder="Senha"
                        onChange={(e) => setSenha(e.target.value)}
                        value={senha} />
                    <AlignButton>
                        <Button type="submit">Entrar</Button>
                    </AlignButton>
                </form>
                <StyledLink to="/signup"> Não tem uma conta? cadastre-se!</StyledLink>
            </Dados>
        </Container>



    );
} export default SignIn