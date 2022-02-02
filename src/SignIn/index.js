
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/MyWallet.png"
import { Dados, StyledLink, Button, Input, AlignButton } from './style'
import axios from "axios"


function SignIn() {
    const [usuario, setUsuario] = useState()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();

        const user = {
            'email': email,
            'password': senha
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', user);
        promise.then(response => {
            setUsuario(response.data);
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
        <>
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

        </>

    );
} export default SignIn