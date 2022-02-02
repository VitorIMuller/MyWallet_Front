import { useState } from "react"
import { Container, Button, AlignButton, Dados, TopBar, Input } from "./style"




function CashOut() {
    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    function handleSignUp(e) {
        e.preventDefault();


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

