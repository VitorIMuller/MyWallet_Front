import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { Button, Buttons, Resgisters, TopBar, LogOut, Container } from "./style"
import logOut from "../assets/Vector.png"
import UserContext from "../Context/UserContext"


function HomePage() {
    const { user } = useContext(UserContext)
    return (
        <Container>
            <TopBar>
                <p>Olá, {user.name}</p>
                <LogOut to="/"><img src={logOut} /></LogOut>
            </TopBar>
            <Resgisters>
                <p>Não há registros de <br></br>entrada ou saída</p>
            </Resgisters>
            <Buttons>
                <Button to="/cashin">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova <br /> entrada</p>
                </Button>
                <Button to="/cashout">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p> Nova <br /> Saída</p>
                </Button>
            </Buttons>

        </Container>
    )
} export default HomePage



