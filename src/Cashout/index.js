import { useContext, useState } from "react"
import { Container, Button, AlignButton, Dados, TopBar, Input } from "./style"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import UserContext from "../Context/UserContext"




function CashOut() {
    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    const { user } = useContext(UserContext)
    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();
        const body = {
            value: value,
            description: description
        }


        const header = {
            headers: {
                "authorization": `Bearer ${user.token}`
            }
        }

        const promise = axios.post("http://localhost:5000/cashout", body, header)
        promise.then(() => {

            navigate("/home")
        })
        promise.catch((error) => alert(error))

    }

    return (
        <Container>
            <TopBar>
                <p>Nova Saída</p>
            </TopBar>
            <Dados>
                <form onSubmit={handleSignUp}>
                    <Input type='text' placeholder="Valor" onChange={(e) => setValue(e.target.value)} value={value} />
                    <Input type='text' placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description} />
                    <AlignButton>
                        <Button type="submit">Salvar Saída</Button>
                    </AlignButton>
                </form>
            </Dados>
        </Container>
    )
} export default CashOut

