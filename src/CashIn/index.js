import { useState } from "react"
import { Container, Button, AlignButton, Dados, TopBar, Input } from "./style"




function CashIn() {
    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    function handleSignUp(e) {
        e.preventDefault();


    }

    return (
        <Container>
            <TopBar>
                <p>Nova Entrada</p>
            </TopBar>
            <Dados>
                <form onSubmit={handleSignUp}>
                    <Input type='text' placeholder="Valor" onChange={(e) => setValue(e.target.value)} value={value} />
                    <Input type='text' placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description} />
                    <AlignButton>
                        <Button type="submit">Salvar Entrada</Button>
                    </AlignButton>
                </form>
            </Dados>
        </Container>
    )
} export default CashIn