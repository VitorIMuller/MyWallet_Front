import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Button, Buttons, Resgisters, TopBar, LogOut, Container } from "./style"
import logOut from "../assets/Vector.png"
import UserContext from "../Context/UserContext"
import axios from 'axios'


function HomePage() {
    const { user } = useContext(UserContext)
    const [historic, setHistoric] = useState()

    function getHistoric() {

        const header = {
            headers: {
                "authorization": `Bearer ${user.token}`
            }
        }

        console.log(header)
        const promise = axios.get("http://localhost:5000/historic", header)
        promise.then((response) => {
            setHistoric(response.data)
        })
        promise.catch((error) => {
            alert(error)
        })
    }
    useEffect((getHistoric), [])


    function depositReturn(value) {
        if (value.type == "deposit") {
            return value;
        }
    }
    let deposit = historic.filter(depositReturn);
    console.log(deposit)

    function withdrawReturn(value) {
        if (value.type == "withdraw") {
            return value
        }
    }
    let withdraw = historic.filter(withdrawReturn)
    console.log(withdraw)

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



